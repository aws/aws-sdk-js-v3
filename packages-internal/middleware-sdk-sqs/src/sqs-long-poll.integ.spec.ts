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
            return super.refreshRetryTokenForRetry(token, errorInfo);
          }
        })({
          maxAttempts: 4,
          backoff: new DeterministicRetryBackoffStrategy(),
        }),
      });

      // Drain capacity so that on the 3rd retry, quota is exhausted
      // and the long-poll backoff path is triggered.
      (sqs.config as any).retryStrategy().then((s: any) => {
        // cost per transient retry = 14 (Retry.cost() when v2026=true).
        // Set capacity to allow 2 retries but not a 3rd.
        s.capacity = 28;
      });

      // Wait for the capacity to be set.
      await (sqs.config as any).retryStrategy();

      requireRequestsFrom(sqs)
        .toMatch({
          hostname: /^sqs.us-west-2.amazonaws.com$/,
        })
        .respondWith(createRetryableErrorResponse());

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

      // 3 attempts: initial + 2 retries succeeded within capacity.
      // 3rd retry fails capacity check but long-poll backs off before returning error.
      // Backoff schedule (deterministic, base=50): 50, 100, 200.
      // totalRetryDelay = 50 + 100 = 150 (2 successful retries).
      // timeElapsed >= 350 (150 from retries + 200 from long-poll backoff on exhaustion).
      expect(data.attempts).toEqual(3);
      expect(data.totalRetryDelay).toEqual(150);
      expect(data.timeElapsed).toBeGreaterThanOrEqual(350);

      // 2 from acquireInitialRetryToken + 3 from requireRequestsFrom (3 requests matched) + 3 metadata
      expect.assertions(8);
    });
  });
}, 30_000);
