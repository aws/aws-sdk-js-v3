import {
  accountIdDefaultMiddleware,
  addGlacierApiVersionMiddleware,
  getGlacierPlugin,
  resolveGlacierMiddlewareConfig
} from "./index";

describe("middleware-sdk-glacier package exports", () => {
  it("addGlacierApiVersionMiddleware", () => {
    expect(typeof addGlacierApiVersionMiddleware).toBe("function");
  });

  it("accountIdDefaultMiddleware", () => {
    expect(typeof accountIdDefaultMiddleware).toBe("function");
  });

  it("getGlacierPlugin", () => {
    expect(typeof getGlacierPlugin).toBe("function");
  });

  it("resolveGlacierMiddlewareConfig", () => {
    expect(typeof resolveGlacierMiddlewareConfig).toBe("function");
  });
});
