import { prependAccountIdMiddleware } from "./prepend-account-id";
import { HttpRequest } from "@aws-sdk/protocol-http";

describe("prependAccountIdMiddleware", () => {
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should prepend AccountId to hostname and remove x-amz-account-id header", async () => {
    const handler = prependAccountIdMiddleware()(next, {} as any);

    await handler({
      input: { AccountId: "123456789" },
      request: new HttpRequest({
        headers: {
          "x-amz-account-id": "foo"
        },
        hostname: "foo"
      })
    });

    const { calls } = (next as any).mock;
    expect(calls.length).toBe(1);
    const { request } = next.mock.calls[0][0];
    expect(request.hostname).toBe("123456789.foo");
    expect(request.headers["x-amz-account-id"]).toBeUndefined();
  });
});
