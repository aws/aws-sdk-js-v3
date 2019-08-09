import { PollyClient } from "../../PollyClient";
import { DescribeVoicesCommand } from "../../commands/DescribeVoicesCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-polly-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeVoices should succeed when given correct input", done => {
    const client = new PollyClient({
      region: defaultRegion,
      credentials
    });

    const describeVoices = new DescribeVoicesCommand({});

    client
      .send(describeVoices)
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
