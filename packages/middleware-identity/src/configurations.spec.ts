import { CREDENTIAL_EXPIRE_WINDOW } from "./configurations";

describe("middleware-identity configurations", () => {
  it("should have an expiration window of 5 minutes in milleseconds", () => {
    expect(CREDENTIAL_EXPIRE_WINDOW).toEqual(5 /* minutes */ * 60 /* seconds */ * 1000 /* ms */);
  });
});
