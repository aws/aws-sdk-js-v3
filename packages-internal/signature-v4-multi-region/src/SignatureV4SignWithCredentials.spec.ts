import { HttpRequest } from "@smithy/core/protocols";
import { Hash } from "@smithy/core/serde";
import { SignatureV4 } from "@smithy/signature-v4";
import { describe, expect, test as it } from "vitest";

import {
  SESSION_TOKEN_HEADER,
  SESSION_TOKEN_QUERY_PARAM,
  SignatureV4SignWithCredentials,
} from "./SignatureV4SignWithCredentials";

describe(SignatureV4SignWithCredentials.name, () => {
  const signerOptions = {
    service: "s3",
    region: "us-east-1",
    credentials: {
      accessKeyId: "MOCK_ACCESS_KEY_ID",
      secretAccessKey: "MOCK_SECRET_ACCESS_KEY",
      sessionToken: "MOCK_SESSION_TOKEN",
    },
    sha256: Hash.bind(null, "sha256"),
  };

  const s3ExpressCredentials = {
    accessKeyId: "MOCK_S3_EXPRESS_ACCESS_KEY_ID",
    secretAccessKey: "MOCK_S3_EXPRESS_SECRET_ACCESS_KEY",
    sessionToken: "MOCK_S3_EXPRESS_SESSION_TOKEN",
  };

  it("should be an instance of SignatureV4", () => {
    const signer = new SignatureV4SignWithCredentials(signerOptions);
    expect(signer).toBeInstanceOf(SignatureV4);
  });

  describe("signWithCredentials", () => {
    it("should set the session token header from alternate credentials", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const signedRequest = await signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(signedRequest.headers[SESSION_TOKEN_HEADER]).toEqual(s3ExpressCredentials.sessionToken);
    });

    it("should use the alternate credentials' access key in the signature", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const signedRequest = await signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(signedRequest.headers["authorization"]).toContain(s3ExpressCredentials.accessKeyId);
      expect(signedRequest.headers["authorization"]).not.toContain(signerOptions.credentials.accessKeyId);
    });

    it("should not include the standard x-amz-security-token header", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const signedRequest = await signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(signedRequest.headers["x-amz-security-token"]).toBeUndefined();
    });

    it("should restore the credential provider after signing", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);

      // signWithCredentials uses alternate credentials
      const first = await signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(first.headers["authorization"]).toContain(s3ExpressCredentials.accessKeyId);
      expect(first.headers[SESSION_TOKEN_HEADER]).toEqual(s3ExpressCredentials.sessionToken);

      // regular sign uses constructor credentials
      const regular = await signer.sign(new HttpRequest({}));
      expect(regular.headers["authorization"]).toContain(signerOptions.credentials.accessKeyId);
      expect(regular.headers["authorization"]).not.toContain(s3ExpressCredentials.accessKeyId);

      // interleaved concurrent calls each use the correct credentials
      const [withCreds1, regular1, withCreds2, regular2] = await Promise.all([
        signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials),
        signer.sign(new HttpRequest({})),
        signer.signWithCredentials(new HttpRequest({}), s3ExpressCredentials),
        signer.sign(new HttpRequest({})),
      ]);

      expect(withCreds1.headers["authorization"]).toContain(s3ExpressCredentials.accessKeyId);
      expect(withCreds1.headers[SESSION_TOKEN_HEADER]).toEqual(s3ExpressCredentials.sessionToken);

      expect(regular1.headers["authorization"]).toContain(signerOptions.credentials.accessKeyId);
      expect(regular1.headers["authorization"]).not.toContain(s3ExpressCredentials.accessKeyId);

      expect(withCreds2.headers["authorization"]).toContain(s3ExpressCredentials.accessKeyId);
      expect(withCreds2.headers[SESSION_TOKEN_HEADER]).toEqual(s3ExpressCredentials.sessionToken);

      expect(regular2.headers["authorization"]).toContain(signerOptions.credentials.accessKeyId);
      expect(regular2.headers["authorization"]).not.toContain(s3ExpressCredentials.accessKeyId);
    });
  });

  describe("presignWithCredentials", () => {
    it("should set the session token in query params", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const presignedRequest = await signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(presignedRequest.query?.[SESSION_TOKEN_QUERY_PARAM]).toEqual(s3ExpressCredentials.sessionToken);
    });

    it("should use the alternate credentials' access key in the presigned URL", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const presignedRequest = await signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      const credential = presignedRequest.query?.["X-Amz-Credential"] as string;
      expect(credential).toContain(s3ExpressCredentials.accessKeyId);
      expect(credential).not.toContain(signerOptions.credentials.accessKeyId);
    });

    it("should not include the standard x-amz-security-token query param", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const presignedRequest = await signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(presignedRequest.query?.["X-Amz-Security-Token"]).toBeUndefined();
    });

    it("should remove the lowercase session token header", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);
      const request = new HttpRequest({ headers: { [SESSION_TOKEN_HEADER]: "old-value" } });
      const presignedRequest = await signer.presignWithCredentials(request, s3ExpressCredentials);
      expect(presignedRequest.headers[SESSION_TOKEN_HEADER]).toBeUndefined();
    });

    it("should restore the credential provider after presigning", async () => {
      const signer = new SignatureV4SignWithCredentials(signerOptions);

      // presignWithCredentials uses alternate credentials
      const first = await signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials);
      expect(first.query?.["X-Amz-Credential"] as string).toContain(s3ExpressCredentials.accessKeyId);
      expect(first.query?.[SESSION_TOKEN_QUERY_PARAM]).toEqual(s3ExpressCredentials.sessionToken);

      // regular presign uses constructor credentials
      const regular = await signer.presign(new HttpRequest({}));
      expect(regular.query?.["X-Amz-Credential"] as string).toContain(signerOptions.credentials.accessKeyId);
      expect(regular.query?.["X-Amz-Credential"] as string).not.toContain(s3ExpressCredentials.accessKeyId);

      // interleaved concurrent calls each use the correct credentials
      const [withCreds1, regular1, withCreds2, regular2] = await Promise.all([
        signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials),
        signer.presign(new HttpRequest({})),
        signer.presignWithCredentials(new HttpRequest({}), s3ExpressCredentials),
        signer.presign(new HttpRequest({})),
      ]);

      expect(withCreds1.query?.["X-Amz-Credential"] as string).toContain(s3ExpressCredentials.accessKeyId);
      expect(withCreds1.query?.[SESSION_TOKEN_QUERY_PARAM]).toEqual(s3ExpressCredentials.sessionToken);

      expect(regular1.query?.["X-Amz-Credential"] as string).toContain(signerOptions.credentials.accessKeyId);
      expect(regular1.query?.["X-Amz-Credential"] as string).not.toContain(s3ExpressCredentials.accessKeyId);

      expect(withCreds2.query?.["X-Amz-Credential"] as string).toContain(s3ExpressCredentials.accessKeyId);
      expect(withCreds2.query?.[SESSION_TOKEN_QUERY_PARAM]).toEqual(s3ExpressCredentials.sessionToken);

      expect(regular2.query?.["X-Amz-Credential"] as string).toContain(signerOptions.credentials.accessKeyId);
      expect(regular2.query?.["X-Amz-Credential"] as string).not.toContain(s3ExpressCredentials.accessKeyId);
    });
  });
});
