import { HttpRequest } from "@smithy/protocol-http";

import { acceptHeaderMiddleware } from "./index";

describe("acceptHeaderMiddleware", () => {
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
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
});
