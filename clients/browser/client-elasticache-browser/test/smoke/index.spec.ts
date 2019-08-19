import { ElastiCacheClient } from "../../ElastiCacheClient";
import { DescribeEventsCommand } from "../../commands/DescribeEventsCommand";
import { DescribeCacheClustersCommand } from "../../commands/DescribeCacheClustersCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-elasticache-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeEvents should succeed when given correct input", done => {
    const client = new ElastiCacheClient({
      region: defaultRegion,
      credentials
    });

    const describeEvents = new DescribeEventsCommand({} as any);

    client
      .send(describeEvents)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeCacheClusters should fail when given bad input", done => {
    const client = new ElastiCacheClient({
      region: defaultRegion,
      credentials
    });

    const describeCacheClusters = new DescribeCacheClustersCommand({
      CacheClusterId: "fake_cluster"
    } as any);

    client
      .send(describeCacheClusters)
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
