import { BuildHandler } from "@aws-sdk/types";
import { acceptsHeaderMiddleware } from "./index";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("acceptsHeaderMiddleware", () => {
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("sets Accepts header to application/json", async () => {
    const handler = acceptsHeaderMiddleware()(next, {} as any);
    await handler({
      input: {},
      request: new HttpRequest({
        headers: {}
      })
    });

    const { calls } = (next as any).mock;
    expect(calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.headers["accepts"]).toBe("application/json");
  });
});
