import { RedshiftClient } from "../../RedshiftClient";
import { DescribeClusterVersionsCommand } from "../../commands/DescribeClusterVersionsCommand";
import { DescribeClustersCommand } from "../../commands/DescribeClustersCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-redshift-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeClusterVersions should succeed when given correct input", done => {
    const client = new RedshiftClient({
      region: defaultRegion,
      credentials
    });

    const describeClusterVersions = new DescribeClusterVersionsCommand({});

    client
      .send(describeClusterVersions)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeClusters should fail when given bad input", done => {
    const client = new RedshiftClient({
      region: defaultRegion,
      credentials
    });

    const describeClusters = new DescribeClustersCommand({
      ClusterIdentifier: "fake-cluster"
    });

    client
      .send(describeClusters)
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
