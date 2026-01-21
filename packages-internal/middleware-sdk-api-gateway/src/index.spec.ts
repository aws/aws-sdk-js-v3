import { HttpRequest } from "@smithy/protocol-http";
import { beforeEach, describe, expect, test as it, vi } from "vitest";

import { acceptHeaderMiddleware } from "./index";

describe("acceptHeaderMiddleware", () => {
  const next = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("sets Accept header to application/json", async () => {
    const handler = acceptHeaderMiddleware()(next, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {},
      }),
    });

    const { calls } = (next as any).mock;
    expect(calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["accept"]).toBe("application/json");
  });

  it("doesn't override user Accept header", async () => {
    const handler = acceptHeaderMiddleware()(next, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {
          accept: "application/yaml",
        },
      }),
    });

    const { calls } = (next as any).mock;
    expect(calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["accept"]).toBe("application/yaml");
  });
});
