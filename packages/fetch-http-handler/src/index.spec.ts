import * as index from "./index";

describe("index", () => {
  it("exports FetchHttpHandler", () => {
    expect(typeof index.FetchHttpHandler).toBe("function");
  });
});
