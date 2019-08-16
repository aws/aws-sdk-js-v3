import { NeptuneClient } from "../../NeptuneClient";
import { DescribeDBEngineVersionsCommand } from "../../commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommand } from "../../commands/DescribeDBInstancesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-neptune-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeDBEngineVersions should succeed when given correct input", done => {
    const client = new NeptuneClient({
      region: defaultRegion,
      credentials
    });

    const describeDBEngineVersions = new DescribeDBEngineVersionsCommand(
      {} as any
    );

    client
      .send(describeDBEngineVersions)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeDBInstances should fail when given bad input", done => {
    const client = new NeptuneClient({
      region: defaultRegion,
      credentials
    });

    const describeDBInstances = new DescribeDBInstancesCommand({
      DBInstanceIdentifier: "fake-id"
    } as any);

    client
      .send(describeDBInstances)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
