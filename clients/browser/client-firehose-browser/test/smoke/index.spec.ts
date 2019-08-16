import { FirehoseClient } from "../../FirehoseClient";
import { ListDeliveryStreamsCommand } from "../../commands/ListDeliveryStreamsCommand";
import { DescribeDeliveryStreamCommand } from "../../commands/DescribeDeliveryStreamCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-firehose-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListDeliveryStreams should succeed when given correct input", done => {
    const client = new FirehoseClient({
      region: defaultRegion,
      credentials
    });

    const listDeliveryStreams = new ListDeliveryStreamsCommand({} as any);

    client
      .send(listDeliveryStreams)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeDeliveryStream should fail when given bad input", done => {
    const client = new FirehoseClient({
      region: defaultRegion,
      credentials
    });

    const describeDeliveryStream = new DescribeDeliveryStreamCommand({
      DeliveryStreamName: "bogus-stream-name"
    } as any);

    client
      .send(describeDeliveryStream)
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
