import { SnowballClient } from "../../SnowballClient";
import { DescribeAddressesCommand } from "../../commands/DescribeAddressesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-snowball Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeAddresses should succeed when given correct input", done => {
    const client = new SnowballClient({
      region: defaultRegion,
      credentials
    });

    const describeAddresses = new DescribeAddressesCommand({});

    client
      .send(describeAddresses)
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
