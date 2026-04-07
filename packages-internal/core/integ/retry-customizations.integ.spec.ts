import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { DynamoDBStreams } from "@aws-sdk/client-dynamodb-streams";
import { AdaptiveRetryStrategy, Retry, StandardRetryStrategy } from "@smithy/util-retry";
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
});
