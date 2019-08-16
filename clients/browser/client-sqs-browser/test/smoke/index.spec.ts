import { SQSClient } from "../../SQSClient";
import { ListQueuesCommand } from "../../commands/ListQueuesCommand";
import { GetQueueUrlCommand } from "../../commands/GetQueueUrlCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-sqs-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListQueues should succeed when given correct input", done => {
    const client = new SQSClient({
      region: defaultRegion,
      credentials
    });

    const listQueues = new ListQueuesCommand({} as any);

    client
      .send(listQueues)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetQueueUrl should fail when given bad input", done => {
    const client = new SQSClient({
      region: defaultRegion,
      credentials
    });

    const getQueueUrl = new GetQueueUrlCommand({
      QueueName: "fake_queue"
    } as any);

    client
      .send(getQueueUrl)
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
