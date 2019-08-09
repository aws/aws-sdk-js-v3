import { CloudWatchLogsClient } from "../../CloudWatchLogsClient";
import { DescribeLogGroupsCommand } from "../../commands/DescribeLogGroupsCommand";
import { GetLogEventsCommand } from "../../commands/GetLogEventsCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudwatch-logs-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("DescribeLogGroups should succeed when given correct input", done => {
    const client = new CloudWatchLogsClient({
      region: defaultRegion,
      credentials
    });

    const describeLogGroups = new DescribeLogGroupsCommand({});

    client
      .send(describeLogGroups)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetLogEvents should fail when given bad input", done => {
    const client = new CloudWatchLogsClient({
      region: defaultRegion,
      credentials
    });

    const getLogEvents = new GetLogEventsCommand({
      logGroupName: "fakegroup",
      logStreamName: "fakestream"
    });

    client
      .send(getLogEvents)
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
