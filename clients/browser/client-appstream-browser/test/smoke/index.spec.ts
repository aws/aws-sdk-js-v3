import { AppStreamClient } from "../../AppStreamClient";
import { DescribeStacksCommand } from "../../commands/DescribeStacksCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-appstream-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeStacks should succeed when given correct input", done => {
    const client = new AppStreamClient({
      region: defaultRegion,
      credentials
    });

    const describeStacks = new DescribeStacksCommand({} as any);

    client
      .send(describeStacks)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
});
