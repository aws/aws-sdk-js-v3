import { addGlacierApiVersionMiddleware } from "./index";

describe("middleware-sdk-glacier package exports", () => {
  it("addGlacierApiVersionMiddleware", () => {
    expect(typeof addGlacierApiVersionMiddleware).toBe("function");
  });
});
