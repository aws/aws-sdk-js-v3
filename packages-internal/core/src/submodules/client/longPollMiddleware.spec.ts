import type { HandlerExecutionContext } from "@smithy/types";
import { describe, expect, test as it } from "vitest";

import { longPollMiddleware } from "./longPollMiddleware";

describe("long poll middleware", () => {
  it("sets long poll mode on request context", async () => {
    const context = {} as HandlerExecutionContext;

    const handler = longPollMiddleware();
    const next = (async () => {}) as any;
    const mwFunction = handler(next, context);
    await mwFunction({} as any);
    expect(context.__retryLongPoll).toBe(true);
  });
});
