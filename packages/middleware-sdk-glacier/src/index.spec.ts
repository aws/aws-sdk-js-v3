import {
  accountIdDefaultMiddleware,
  addGlacierApiVersionMiddleware
} from "./index";

describe("middleware-sdk-glacier package exports", () => {
  it("addGlacierApiVersionMiddleware", () => {
    expect(typeof addGlacierApiVersionMiddleware).toBe("function");
  });

  it("accountIdDefaultMiddleware", () => {
    expect(typeof accountIdDefaultMiddleware).toBe("function");
  });
});
