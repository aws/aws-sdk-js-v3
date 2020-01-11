import { validateAccountIdMiddleware } from "./validate-account-id";

describe("validateAccountIdMiddleware", () => {
  it("should do nothing if AccountId is valid", async () => {
    const next = jest.fn();
    const handler = validateAccountIdMiddleware()(next, {} as any);

    await handler({
      input: {
        AccountId: "123456789"
      }
    });

    expect(next.mock.calls.length).toBe(1);
  });

  for (const accountId of [
    "",
    "1234567890123456789012345678901234567890123456789012345678901234567890"
  ]) {
    it("should throw if AccountId is the wrong length", async () => {
      const next = jest.fn();
      const handler = validateAccountIdMiddleware()(next, {} as any);

      try {
        await handler({
          input: {
            AccountId: accountId
          }
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
    const next = jest.fn();
    const handler = validateAccountIdMiddleware()(next, {} as any);

    try {
      await handler({
        input: {
          AccountId: "###"
        }
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
