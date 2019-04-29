import * as index from "./index";

describe("index", () => {
  it("exports NodeHttpHandler", () => {
    expect(typeof index.NodeHttpHandler).toBe("function");
  });
});
