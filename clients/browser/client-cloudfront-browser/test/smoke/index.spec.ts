import { CloudFrontClient } from "../../CloudFrontClient";
import { ListCloudFrontOriginAccessIdentitiesCommand } from "../../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { GetDistributionCommand } from "../../commands/GetDistributionCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudfront-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-east-1";
  it("ListCloudFrontOriginAccessIdentities should succeed when given correct input", done => {
    const client = new CloudFrontClient({
      region: defaultRegion,
      credentials
    });

    const listCloudFrontOriginAccessIdentities = new ListCloudFrontOriginAccessIdentitiesCommand(
      {
        MaxItems: "1"
      }
    );

    client
      .send(listCloudFrontOriginAccessIdentities)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetDistribution should fail when given bad input", done => {
    const client = new CloudFrontClient({
      region: defaultRegion,
      credentials
    });

    const getDistribution = new GetDistributionCommand({
      Id: "fake-id"
    });

    client
      .send(getDistribution)
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
