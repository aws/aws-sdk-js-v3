import { resolveLogins } from "./resolveLogins";

describe("resolveLogins", () => {
  it("should convert provider functions to string tokens", async () => {
    expect(
      await resolveLogins({
        "www.amazon.com": "string token",
        "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": () => Promise.resolve("potential refreshing token"),
      })
    ).toEqual({
      "www.amazon.com": "string token",
      "cognito-idp.us-east-1.amazonaws.com/us-east-1_123456789": "potential refreshing token",
    });
  });
});
