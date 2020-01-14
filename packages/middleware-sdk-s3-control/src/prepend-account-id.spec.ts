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

  for (const accountId of [
    "",
    "1234567890123456789012345678901234567890123456789012345678901234567890"
  ]) {
    it("should throw if AccountId is the wrong length", async () => {
      const handler = prependAccountIdMiddleware()(next, {} as any);

      try {
        await handler({
          input: {
            AccountId: accountId
          },
          request: new HttpRequest({})
        });
      } catch (e) {
        expect(e).toEqual(
          new Error(
            "ValidationError: AccountId length should be between 1 to 63 characters, inclusive."
          )
        );
      }
    });
  }

  it("should throw if an AccountId is hostname compatible", async () => {
    const handler = prependAccountIdMiddleware()(next, {} as any);

    try {
      await handler({
        input: {
          AccountId: "###"
        },
        request: new HttpRequest({})
      });
    } catch (e) {
      expect(e).toEqual(
        new Error(
          "ValidationError: AccountId should be hostname compatible. AccountId: ###"
        )
      );
    }
  });
});
