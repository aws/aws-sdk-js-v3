import { STS, STSClient } from "@aws-sdk/client-sts";

describe("middleware-sdk-sts", () => {
  describe(STS.name, () => {
    it("sets the sts constructor in config", async () => {
      const client = new STS({
        region: "us-west-2",
      });

      expect(client.config.stsClientCtor).toBe(STSClient);
    });
  });
});
