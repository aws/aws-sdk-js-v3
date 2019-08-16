import { DatabaseMigrationServiceClient } from "../../DatabaseMigrationServiceClient";
import { DescribeEndpointsCommand } from "../../commands/DescribeEndpointsCommand";
import { DescribeTableStatisticsCommand } from "../../commands/DescribeTableStatisticsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-database-migration-service-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeEndpoints should succeed when given correct input", done => {
    const client = new DatabaseMigrationServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeEndpoints = new DescribeEndpointsCommand({} as any);

    client
      .send(describeEndpoints)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeTableStatistics should fail when given bad input", done => {
    const client = new DatabaseMigrationServiceClient({
      region: defaultRegion,
      credentials
    });

    const describeTableStatistics = new DescribeTableStatisticsCommand({
      ReplicationTaskArn: "arn:aws:acm:region:123456789012"
    } as any);

    client
      .send(describeTableStatistics)
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
