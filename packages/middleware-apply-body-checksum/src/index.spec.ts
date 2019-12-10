import { applyMd5BodyChecksumMiddleware } from "./index";

describe("middleware-apply-body-checksum package exports", () => {
  it("applyMd5BodyChecksumMiddleware", () => {
    expect(typeof applyMd5BodyChecksumMiddleware).toBe("function");
  });
});
