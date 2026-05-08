import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { STS } from "@aws-sdk/client-sts";
import { HttpResponse } from "@smithy/core/protocols";
import { AdaptiveRetryStrategy, Retry, StandardRetryStrategy } from "@smithy/core/retry";
import { Readable } from "node:stream";
import { beforeAll, describe, expect, test as it } from "vitest";

describe("retry customization", () => {
  for (const DDBCtor of [DynamoDB, DynamoDBStreams]) {
    describe(DDBCtor.name, () => {
      beforeAll(async () => {
        Retry.v2026 = true;
      });

      it("has a custom retry strategy when no maxAttempts or retryMode are set", async () => {
        const streams = new DDBCtor({
          region: "us-west-2",
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
        });
        const retryStrategy = await streams.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);

        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(4);
        expect((retryStrategy as any).baseDelay).toBe(25);
      });

      it("uses derived retryStrategy when retryMode is set", async () => {
        const streams = new DDBCtor({
          region: "us-west-2",
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          retryMode: "adaptive",
        });
        const retryStrategy = await streams.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(AdaptiveRetryStrategy);
      });

      it("uses derived retryStrategy when maxAttempts is set", async () => {
        const streams = new DDBCtor({
          region: "us-west-2",
          credentials: {
            accessKeyId: "INTEG",
            secretAccessKey: "INTEG",
          },
          maxAttempts: 5,
        });
        const retryStrategy = await streams.config.retryStrategy();
        expect(retryStrategy).toBeInstanceOf(StandardRetryStrategy);

        expect(await (retryStrategy as any).maxAttemptsProvider()).toBe(5);
        expect((retryStrategy as any).baseDelay).toBe(50);
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
