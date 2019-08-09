import { EMRClient } from "../../EMRClient";
import { ListClustersCommand } from "../../commands/ListClustersCommand";
import { DescribeClusterCommand } from "../../commands/DescribeClusterCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-emr-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListClusters should succeed when given correct input", done => {
    const client = new EMRClient({
      region: defaultRegion,
      credentials
    });

    const listClusters = new ListClustersCommand({});

    client
      .send(listClusters)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeCluster should fail when given bad input", done => {
    const client = new EMRClient({
      region: defaultRegion,
      credentials
    });

    const describeCluster = new DescribeClusterCommand({
      ClusterId: "fake_cluster"
    });

    client
      .send(describeCluster)
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
