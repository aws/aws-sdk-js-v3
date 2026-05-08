import { requireRequestsFrom } from "@aws-sdk/aws-util-test/src";
import { SQS } from "@aws-sdk/client-sqs";
import { HttpResponse } from "@aws-sdk/config/requestHandler";
import { StandardRetryStrategy } from "@aws-sdk/config/retryStrategy";
import { Retry } from "@smithy/core/retry";
import type { RetryErrorInfo, StandardRetryBackoffStrategy, StandardRetryToken } from "@smithy/types";
import { performance } from "node:perf_hooks";
import { beforeEach, describe, expect, test as it } from "vitest";

class DeterministicRetryBackoffStrategy implements StandardRetryBackoffStrategy {
  protected x: number = Retry.delay();

  public computeNextBackoffDelay(i: number): number {
    const b = 1;
    const r = 2;
    const t_i = b * Math.min(this.x * r ** i, 20_000);
    return Math.floor(t_i);
  }

  public setDelayBase(delay: number): void {
    this.x = delay;
  }
}

describe("SQS", () => {
  beforeEach(() => {
    Retry.v2026 = true;
  });

  describe("long poll", () => {
    function createRetryableErrorResponse() {
      return new HttpResponse({
        statusCode: 500,
      });
    }

    it("performs retry in a long poll mode", async () => {
      const sqs = new SQS({
        region: "us-west-2",
        credentials: {
          accessKeyId: "MOCK",
          secretAccessKey: "MOCK",
        },
        retryStrategy: new (class extends StandardRetryStrategy {
          public async acquireInitialRetryToken(scope: string) {
            expect(scope).toEqual(":longpoll");
            const token = await super.acquireInitialRetryToken(scope);
            expect(token.isLongPoll?.()).toBe(true);
            return token;
          }

          public async refreshRetryTokenForRetry(
            token: StandardRetryToken,
            errorInfo: RetryErrorInfo
          ): Promise<StandardRetryToken> {
            try {
              return await super.refreshRetryTokenForRetry(token, errorInfo);
            } catch (e: any) {
              expect(e.$backoff).toBeGreaterThanOrEqual(1);
              throw e;
            }
          }
        })({
          maxAttempts: 3,
          backoff: new DeterministicRetryBackoffStrategy(),
        }),
      });

      requireRequestsFrom(sqs)
        .toMatch({
          hostname: /^sqs.us-west-2.amazonaws.com$/,
        })
        .respondWith(createRetryableErrorResponse());

      let i = 0;
      while (true) {
        const requestBegins = performance.now();

        const receive = await sqs
          .receiveMessage({
            QueueUrl: "https://sqs.us-west-2.amazonaws.com/000000000000/Glorp",
          })
          .catch((_) => _);

        const requestRetriesExhausted = performance.now();

        const data = {
          attempts: receive?.$metadata?.attempts,
          totalRetryDelay: receive?.$metadata?.totalRetryDelay,
          timeElapsed: requestRetriesExhausted - requestBegins,
        };

        expect(data.attempts).toEqual(3);
        expect(data.totalRetryDelay).toEqual(150);
        expect(data.timeElapsed).toBeGreaterThanOrEqual(350);

        if (++i >= 1) {
          break;
        }
      }

      const requestIterations = 1;
      const requestMatcherAssertionsPerRequest = 3; // includes retries.
      const retryLifecycleAssertionsPerRequest = 3;
      const metadataAssertionsPerRequest = 3;

      expect.assertions(
        requestIterations *
          (requestMatcherAssertionsPerRequest + retryLifecycleAssertionsPerRequest + metadataAssertionsPerRequest)
      );
    });
  });
}, 30_000);
