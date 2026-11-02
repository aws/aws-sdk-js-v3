import { createSign, generateKeyPairSync, type KeyObject } from "node:crypto";
import { beforeAll, describe, expect, it, vi } from "vitest";

import { SIGNABLE_KEYS_BY_TYPE } from "./constants";
import { MessageValidator } from "./MessageValidator";
import type { SNSMessage } from "./types";

// A signing keypair stands in for an SNS signing cert: the validator verifies
// the signature against the public key PEM returned by the stubbed fetcher,
// which reproduces the upstream cert-verify path without an X.509 library.
let privateKey: KeyObject;
let certPem: string;

const now = new Date().toISOString();

const invalidMessage = { foo: "bar", fizz: "buzz" } as unknown as SNSMessage;

const validMessage: SNSMessage = {
  Type: "Notification",
  MessageId: "1",
  TopicArn: "arn",
  Message: "A message for you!",
  Timestamp: now,
  SignatureVersion: "1",
  SigningCertURL: "https://localhost:56789/cert.pem",
};

const validSHA256Message: SNSMessage = {
  ...validMessage,
  SignatureVersion: "2",
};

const validLambdaMessage: SNSMessage = {
  Type: "Notification",
  MessageId: "1",
  TopicArn: "arn",
  Subject: null,
  Message: "A Lambda message for you!",
  Timestamp: now,
  SignatureVersion: "1",
  SigningCertUrl: "https://localhost:56789/cert.pem",
};

const validSubscriptionControlMessage: SNSMessage = {
  ...validMessage,
  Token: "Nonce",
  SubscribeURL: "https://www.amazonaws.com",
  Type: "SubscriptionConfirmation",
};

const validUnsubscriptionControlMessage: SNSMessage = {
  ...validSubscriptionControlMessage,
  Type: "UnsubscribeConfirmation",
};

const utf8Message: SNSMessage = {
  ...validMessage,
  Message: "Ａ Ｍｅｓｓａｇｅ Ｆｏｒ ｙｏｕ！",
};

const multilineMessage: SNSMessage = {
  ...validMessage,
  Message: "first\nsecond",
  Subject: "first\nsecond",
};

const forgedMessage: SNSMessage = {
  Type:
    "MessageId\nattacker-message-id" +
    "\nTimestamp\n2015-10-05T06:41:38.000Z" +
    "\nTopicArn\narn:aws:sns:us-east-1:999999999999:attacker" +
    "\nType\nNotification",
  MessageId: "forged-message-id",
  TopicArn: "arn:aws:sns:us-east-1:111111111111:victim",
  Message: "perform protected action",
  Timestamp: "2015-10-05T06:40:38.000Z",
  SignatureVersion: "2",
  SigningCertURL: "https://localhost:56789/cert.pem",
};

const collisionMessage: SNSMessage = {
  Type: "Notification",
  MessageId: "attacker-message-id",
  TopicArn: "arn:aws:sns:us-east-1:999999999999:attacker",
  Message:
    "perform protected action" +
    "\nMessageId\nforged-message-id" +
    "\nTimestamp\n2015-10-05T06:40:38.000Z" +
    "\nTopicArn\narn:aws:sns:us-east-1:111111111111:victim" +
    "\nType",
  Timestamp: "2015-10-05T06:41:38.000Z",
  SignatureVersion: "2",
  SigningCertURL: "https://localhost:56789/cert.pem",
};

const validCertUrl = "https://sns.us-east-1.amazonaws.com/cert.pem";

function buildStringToSign(message: SNSMessage, signableKeys: string[]): string {
  let stringToSign = "";
  for (const key of signableKeys) {
    if (key in message) {
      stringToSign += `${key}\n${message[key] as string}\n`;
    }
  }
  return stringToSign;
}

function sign(message: SNSMessage): void {
  const algorithm = message.SignatureVersion === "1" ? "RSA-SHA1" : "RSA-SHA256";
  const signer = createSign(algorithm);
  const signableKeys = SIGNABLE_KEYS_BY_TYPE[message.Type as "Notification"];
  for (const key of signableKeys) {
    if (key in message) {
      // Match Lambda: a null Subject is not signed.
      if (key === "Subject" && message[key] === null) {
        continue;
      }
      signer.update(`${key}\n${message[key] as string}\n`, "utf8");
    }
  }
  message.Signature = signer.sign(privateKey, "base64");
}

const fetcher = () => Promise.resolve(certPem);

function validator(hostPattern?: RegExp, encoding?: BufferEncoding) {
  return new MessageValidator(hostPattern ?? /^localhost:56789$/, encoding, fetcher);
}

beforeAll(() => {
  const pair = generateKeyPairSync("rsa", { modulusLength: 2048 });
  privateKey = pair.privateKey;
  certPem = pair.publicKey.export({ type: "spki", format: "pem" }) as string;

  for (const message of [
    validMessage,
    validSHA256Message,
    validLambdaMessage,
    validSubscriptionControlMessage,
    validUnsubscriptionControlMessage,
    utf8Message,
    multilineMessage,
    collisionMessage,
  ]) {
    sign(message);
  }
  // Forged message reuses the collision message's bytes (and thus signature).
  forgedMessage.Signature = collisionMessage.Signature;
});

describe("validator interface", () => {
  it("resolves with the validated message", async () => {
    const message = await validator().validate(validMessage);
    expect(message).toBe(validMessage);
  });

  it("supports the legacy callback form", () =>
    new Promise<void>((done, fail) => {
      validator().validate(validMessage, (err, message) => {
        try {
          expect(err).toBeNull();
          expect(message).toBe(validMessage);
          done();
        } catch (e) {
          fail(e);
        }
      });
    }));
});

describe("message validation", () => {
  it("rejects hashes without all required keys", async () => {
    await expect(new MessageValidator().validate(invalidMessage)).rejects.toThrow("Message missing required keys.");
  });

  it("rejects canonical string collisions", async () => {
    // The collision and forged messages share identical signed bytes...
    expect(buildStringToSign(collisionMessage, SIGNABLE_KEYS_BY_TYPE.Notification)).toEqual(
      buildStringToSign(forgedMessage, SIGNABLE_KEYS_BY_TYPE.Notification)
    );
    // ...but the forged Type is not a supported type, so it is rejected first.
    await expect(validator().validate(forgedMessage)).rejects.toThrow("The message Type is not supported.");
  });

  it('accepts Lambda payloads with improper "Url" casing', async () => {
    const message = await validator().validate(validLambdaMessage);
    expect(message.Message).toEqual("A Lambda message for you!");
  });

  it("rejects hashes residing on an invalid domain", async () => {
    await expect(new MessageValidator().validate(validMessage)).rejects.toThrow(
      "The certificate is located on an invalid domain."
    );
  });

  it("rejects hashes with an invalid signature type", async () => {
    await expect(
      new MessageValidator(undefined, undefined, fetcher).validate({
        ...validMessage,
        SignatureVersion: "3",
        SigningCertURL: validCertUrl,
      })
    ).rejects.toThrow("The signature version 3 is not supported.");
  });

  it("verifies the signature of well-structured messages", async () => {
    await expect(
      validator().validate({
        ...validMessage,
        Signature: Buffer.from("NOT A VALID SIGNATURE").toString("base64"),
      })
    ).rejects.toThrow("The message signature is invalid.");
  });

  it("accepts a valid SignatureVersion 1 message", async () => {
    await expect(validator().validate(validMessage)).resolves.toBeDefined();
  });

  it("accepts a valid SignatureVersion 2 message", async () => {
    await expect(validator().validate(validSHA256Message)).resolves.toBeDefined();
  });

  it("ignores subscription fields on notifications", async () => {
    await expect(
      validator().validate({ ...validMessage, SubscribeURL: "https://www.amazonaws.com", Token: "not-signed" })
    ).resolves.toBeDefined();
  });

  it("allows newlines in message and subject", async () => {
    await expect(validator().validate(multilineMessage)).resolves.toBeDefined();
  });

  it("accepts valid messages as JSON strings", async () => {
    await expect(validator().validate(JSON.stringify(validMessage))).resolves.toBeDefined();
  });

  it("rejects invalid JSON strings", async () => {
    await expect(validator().validate("{not json")).rejects.toThrow("Unexpected error while parsing the message.");
  });
});

describe("subscription control message validation", () => {
  it("rejects subscribe hashes without additional keys", async () => {
    await expect(validator().validate({ ...validMessage, Type: "SubscriptionConfirmation" })).rejects.toThrow(
      "Message missing required keys."
    );
  });

  it("accepts a valid subscription control message", async () => {
    await expect(validator().validate(validSubscriptionControlMessage)).resolves.toBeDefined();
  });

  it("accepts a valid unsubscribe control message", async () => {
    await expect(validator().validate(validUnsubscriptionControlMessage)).resolves.toBeDefined();
  });

  it("ignores subject fields on subscription messages", async () => {
    await expect(
      validator().validate({ ...validSubscriptionControlMessage, Subject: "not-signed" })
    ).resolves.toBeDefined();
  });

  it.each([
    ["MessageId", "value\ninjection"],
    ["Timestamp", "value\rinjection"],
    ["TopicArn", "value\ninjection"],
  ])("rejects newlines in %s", async (field, value) => {
    await expect(validator().validate({ ...validMessage, [field]: value })).rejects.toThrow(
      `The message field "${field}" must not contain newlines.`
    );
  });

  it.each([
    ["SubscribeURL", "value\ninjection"],
    ["Token", "value\rinjection"],
  ])("rejects newlines in %s", async (field, value) => {
    await expect(validator().validate({ ...validSubscriptionControlMessage, [field]: value })).rejects.toThrow(
      `The message field "${field}" must not contain newlines.`
    );
  });
});

describe("UTF8 message validation", () => {
  it("accepts a valid UTF8 message", async () => {
    await expect(validator(/^localhost:56789$/, "utf8").validate(utf8Message)).resolves.toBeDefined();
  });

  it("honors the legacy mutable .encoding property", async () => {
    const v = validator();
    v.encoding = "utf8";
    await expect(v.validate(utf8Message)).resolves.toBeDefined();
  });
});

describe("invalid signing cert", () => {
  it("surfaces errors thrown during verification", async () => {
    const badFetcher = () => Promise.resolve("not a real certificate");
    await expect(new MessageValidator(/^localhost:56789$/, "utf8", badFetcher).validate(utf8Message)).rejects.toThrow(
      "Unexpected error while verifying the message signature."
    );
  });

  it("surfaces certificate retrieval failures", async () => {
    const failing = vi.fn(() => Promise.reject(new Error("Certificate could not be retrieved")));
    await expect(new MessageValidator(/^localhost:56789$/, "utf8", failing).validate(validMessage)).rejects.toThrow(
      "Certificate could not be retrieved"
    );
  });
});
