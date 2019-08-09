import { SNSClient } from "../../SNSClient";
import { ListTopicsCommand } from "../../commands/ListTopicsCommand";
import { PublishCommand } from "../../commands/PublishCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-sns Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListTopics should succeed when given correct input", done => {
    const client = new SNSClient({
      region: defaultRegion,
      credentials
    });

    const listTopics = new ListTopicsCommand({});

    client
      .send(listTopics)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("Publish should fail when given bad input", done => {
    const client = new SNSClient({
      region: defaultRegion,
      credentials
    });

    const publish = new PublishCommand({
      Message: "hello",
      TopicArn: "fake_topic"
    });

    client
      .send(publish)
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
