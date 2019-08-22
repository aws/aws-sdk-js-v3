import { NodeHttp2Handler } from "./node-http2-handler";

describe("NodeHttp2Handler", () => {
  describe("connectionPool", () => {
    it("is empty on initialization", () => {
      const nodeH2Handler = new NodeHttp2Handler();
      // @ts-ignore: access private property
      expect(nodeH2Handler.connectionPool.size).toBe(0);
    });
  });
});
