import { accountIdDefaultMiddleware } from "./account-id-default";

describe("accountIdDefaultMiddleware", () => {
  const next = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("adds default accountId if not set on input", async () => {
    const handler = accountIdDefaultMiddleware()(next, {} as any);
    await handler({
      input: {},
    });

    expect(next.mock.calls.length).toBe(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        accountId: "-",
      },
    });
  });

  it("does not change accountId input if set previously", async () => {
    const handler = accountIdDefaultMiddleware()(next, {} as any);
    await handler({
      input: {
        accountId: "1234",
      },
    });

    expect(next.mock.calls.length).toBe(1);
    expect(next).toHaveBeenCalledWith({
      input: {
        accountId: "1234",
      },
    });
  });
});
