import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { STS } from "@aws-sdk/client-sts";
import { HttpResponse } from "@smithy/core/protocols";
import { AdaptiveRetryStrategy, Retry, StandardRetryStrategy } from "@smithy/core/retry";
import { Readable } from "node:stream";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("retry customization", () => {
  const credentials = { accessKeyId: "INTEG", secretAccessKey: "INTEG" };

  for (const DDBCtor of [DynamoDB, DynamoDBStreams]) {
    describe(DDBCtor.name + " w/ Retry.v2026", () => {
      beforeAll(async () => {
        Retry.v2026 = true;
      });

      it("defaults to 4 attempts with 25ms delay base, standard retry strategy", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(4);
        expect((retryStrategy as any).baseDelay).toBe(25);
      });

      it("preserves 4 attempts and 25ms delay base if adaptive mode is set", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials, retryMode: "adaptive" });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(AdaptiveRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(4);
        expect((retryStrategy as any).standardRetryStrategy.baseDelay).toBe(25);
      });

      it("preserves standard mode and 25ms delay base if 10 attempts are set", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials, maxAttempts: 10 });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(10);
        expect((retryStrategy as any).baseDelay).toBe(25);
      });

      it("providing a RetryStrategy object overrides the attempt count and delay base", async () => {
        const custom = new StandardRetryStrategy({ maxAttempts: 7, baseDelay: 100 });
        const client = new DDBCtor({ region: "us-west-2", credentials, retryStrategy: custom });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBe(custom);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(7);
        expect((retryStrategy as any).baseDelay).toBe(100);
      });

      it("resolves precedence: code > env > ddb default", async () => {
        process.env.AWS_MAX_ATTEMPTS = "9";
        try {
          const clientWithEnv = new DDBCtor({ region: "us-west-2", credentials });
          expect(await clientWithEnv.config.maxAttempts()).toBe(9);

          const clientWithCode = new DDBCtor({ region: "us-west-2", credentials, maxAttempts: 5 });
          expect(await clientWithCode.config.maxAttempts()).toBe(5);
        } finally {
          delete process.env.AWS_MAX_ATTEMPTS;
        }

        const clientDefault = new DDBCtor({ region: "us-west-2", credentials });
        expect(await clientDefault.config.maxAttempts()).toBe(4);
      });
    });

    describe(DDBCtor.name + " WITHOUT Retry.v2026", () => {
      beforeAll(async () => {
        Retry.v2026 = false;
      });

      it("defaults to 3 attempts with 100ms delay base, standard retry strategy", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(3);
        expect((retryStrategy as any).baseDelay).toBe(100);
      });

      it("preserves 3 attempts and 100ms delay base if adaptive mode is set", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials, retryMode: "adaptive" });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(AdaptiveRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(3);
        expect((retryStrategy as any).standardRetryStrategy.baseDelay).toBe(100);
      });

      it("preserves standard mode and 100ms delay base if 10 attempts are set", async () => {
        const client = new DDBCtor({ region: "us-west-2", credentials, maxAttempts: 10 });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(10);
        expect((retryStrategy as any).baseDelay).toBe(100);
      });

      it("providing a RetryStrategy object overrides the attempt count and delay base", async () => {
        const custom = new StandardRetryStrategy({ maxAttempts: 7, baseDelay: 100 });
        const client = new DDBCtor({ region: "us-west-2", credentials, retryStrategy: custom });
        const retryStrategy = await client.config.retryStrategy();
        expect(retryStrategy).toBe(custom);
        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(7);
        expect((retryStrategy as any).baseDelay).toBe(100);
      });
    });
  }

  describe("STS", () => {
    it("IDPCommunicationError is retryable", async () => {
      const sts = new STS({
        region: "us-west-2",
        credentials: {
          accessKeyId: "INTEG",
          secretAccessKey: "INTEG",
        },
      });

      requireRequestsFrom(sts)
        .toMatch({
          hostname: /./,
        })
        .respondWith(
          new HttpResponse({
            statusCode: 400,
            headers: {
              "content-type": "text/xml",
            },
            body: Readable.from(
              Buffer.from(
                `
<ErrorResponse>
    <Error>
        <Type>Sender</Type>
        <Code>IDPCommunicationError</Code>
        <Message>Oh No 1</Message>
    </Error>
    <RequestId>c6104cbe-af31-11e0-8154-cbc7ccf896c7</RequestId>
</ErrorResponse>
            `.trim()
              )
            ),
          }),
          new HttpResponse({
            statusCode: 400,
            headers: {
              "content-type": "text/xml",
            },
            body: Readable.from(
              Buffer.from(
                `
<ErrorResponse>
    <Error>
        <Type>Sender</Type>
        <Code>IDPCommunicationError</Code>
        <Message>Oh No 2</Message>
    </Error>
    <RequestId>c6104cbe-af31-11e0-8154-cbc7ccf896c7</RequestId>
</ErrorResponse>
            `.trim()
              )
            ),
          }),
          new HttpResponse({
            statusCode: 200,
            headers: {
              "content-type": "text/xml",
            },
            body: Readable.from(
              Buffer.from(
                `
<AssumeRoleResponse xmlns="https://sts.amazonaws.com/doc/2011-06-15/">
  <AssumeRoleResult>
  <SourceIdentity>Alice</SourceIdentity>
    <AssumedRoleUser>
      <Arn>arn:aws:sts::123456789012:assumed-role/demo/TestAR</Arn>
      <AssumedRoleId>ARO123EXAMPLE123:TestAR</AssumedRoleId>
    </AssumedRoleUser>
    <Credentials>
      <AccessKeyId>akid</AccessKeyId>
      <SecretAccessKey>sak</SecretAccessKey>
      <SessionToken>token</SessionToken>
      <Expiration>2050-11-09T13:34:41Z</Expiration>
    </Credentials>
  </AssumeRoleResult>
  <ResponseMetadata>
    <RequestId>c6104cbe-af31-11e0-8154-cbc7ccf896c7</RequestId>
  </ResponseMetadata>
</AssumeRoleResponse>
            `.trim()
              )
            ),
          })
        );

      const id = await sts.getCallerIdentity({});
      expect(id.$metadata.attempts).toEqual(3);
    });
  });
});
