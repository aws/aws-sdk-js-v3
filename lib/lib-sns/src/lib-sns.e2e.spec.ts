import {
  PublishCommand,
  SNSClient,
  SubscribeCommand,
  CreateTopicCommand,
  DeleteTopicCommand,
} from "@aws-sdk/client-sns";
import {
  CreateQueueCommand,
  DeleteQueueCommand,
  GetQueueAttributesCommand,
  ReceiveMessageCommand,
  SetQueueAttributesCommand,
  SQSClient,
} from "@aws-sdk/client-sqs";
import { randomUUID } from "node:crypto";
import { afterAll, beforeAll, describe, expect, test as it } from "vitest";

import { MessageValidator } from "./MessageValidator";
import type { SNSMessage } from "./types";

// Authoritative oracle: SNS signs a real message, delivers it to an SQS queue,
// and the validator verifies the live signature against the live signing cert.
// A tampered copy of that same real message must then be rejected.
describe("@aws-sdk/lib-sns", () => {
  const region = "us-west-2";
  const credentials = aws?.testCredentials;

  let sns: SNSClient;
  let sqs: SQSClient;
  let topicArn = "";
  let queueUrl = "";
  let queueArn = "";

  beforeAll(async () => {
    sns = new SNSClient({ region, credentials });
    sqs = new SQSClient({ region, credentials });

    const name = `aws-js-lib-sns-${randomUUID()}`;

    topicArn = (await sns.send(new CreateTopicCommand({ Name: name }))).TopicArn!;
    queueUrl = (await sqs.send(new CreateQueueCommand({ QueueName: name }))).QueueUrl!;

    const attrs = await sqs.send(new GetQueueAttributesCommand({ QueueUrl: queueUrl, AttributeNames: ["QueueArn"] }));
    queueArn = attrs.Attributes!.QueueArn!;

    // Allow this topic to deliver to the queue.
    await sqs.send(
      new SetQueueAttributesCommand({
        QueueUrl: queueUrl,
        Attributes: {
          Policy: JSON.stringify({
            Version: "2012-10-17",
            Statement: [
              {
                Effect: "Allow",
                Principal: { Service: "sns.amazonaws.com" },
                Action: "sqs:SendMessage",
                Resource: queueArn,
                Condition: { ArnEquals: { "aws:SourceArn": topicArn } },
              },
            ],
          }),
        },
      })
    );

    // RawMessageDelivery defaults to false, so SQS receives the signed envelope.
    await sns.send(new SubscribeCommand({ TopicArn: topicArn, Protocol: "sqs", Endpoint: queueArn }));
  }, 60_000);

  afterAll(async () => {
    if (topicArn) {
      await sns.send(new DeleteTopicCommand({ TopicArn: topicArn })).catch(() => {});
    }
    if (queueUrl) {
      await sqs.send(new DeleteQueueCommand({ QueueUrl: queueUrl })).catch(() => {});
    }
  }, 30_000);

  async function receiveSignedMessage(): Promise<SNSMessage> {
    // Poll until the subscription is active and the message is delivered.
    const deadline = Date.now() + 40_000;
    while (Date.now() < deadline) {
      const res = await sqs.send(
        new ReceiveMessageCommand({ QueueUrl: queueUrl, WaitTimeSeconds: 20, MaxNumberOfMessages: 1 })
      );
      const body = res.Messages?.[0]?.Body;
      if (body) {
        return JSON.parse(body) as SNSMessage;
      }
    }
    throw new Error("SNS message was not delivered to the queue in time");
  }

  it("validates a real SNS-signed message and rejects a tampered copy", async () => {
    const payload = `lib-sns e2e ${randomUUID()}`;
    await sns.send(new PublishCommand({ TopicArn: topicArn, Message: payload }));

    const envelope = await receiveSignedMessage();

    // The real envelope carries a live signature and cert URL.
    expect(envelope.Type).toEqual("Notification");
    expect(envelope.SignatureVersion).toBeTruthy();
    expect(envelope.Signature).toBeTruthy();
    expect(envelope.SigningCertURL).toMatch(/^https:\/\/sns\.[^/]+\.amazonaws\.com(\.cn)?\//);
    expect(envelope.Message).toEqual(payload);

    const validator = new MessageValidator();

    // Live signature + live cert fetch must validate.
    const validated = await validator.validate(envelope);
    expect(validated.Message).toEqual(payload);

    // Tampering the signed Message invalidates the real signature.
    const tampered: SNSMessage = { ...envelope, Message: `${payload} (tampered)` };
    await expect(validator.validate(tampered)).rejects.toThrow("The message signature is invalid.");
  }, 90_000);
});
