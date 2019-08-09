import { CloudHSMV2Client } from "../../CloudHSMV2Client";
import { DescribeClustersCommand } from "../../commands/DescribeClustersCommand";
import { ListTagsCommand } from "../../commands/ListTagsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudhsm-v2-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeClusters should succeed when given correct input", done => {
    const client = new CloudHSMV2Client({
      region: defaultRegion,
      credentials
    });

    const describeClusters = new DescribeClustersCommand({});

    client
      .send(describeClusters)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("ListTags should fail when given bad input", done => {
    const client = new CloudHSMV2Client({
      region: defaultRegion,
      credentials
    });

    const listTags = new ListTagsCommand({
      ResourceId: "bogus-arn"
    });

    client
      .send(listTags)
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
