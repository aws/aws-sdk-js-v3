import { CloudWatchClient } from "../../CloudWatchClient";
import { ListMetricsCommand } from "../../commands/ListMetricsCommand";
import { SetAlarmStateCommand } from "../../commands/SetAlarmStateCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudwatch-browser Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListMetrics should succeed when given correct input", done => {
    const client = new CloudWatchClient({
      region: defaultRegion,
      credentials
    });

    const listMetrics = new ListMetricsCommand({
      Namespace: "AWS/EC2"
    });

    client
      .send(listMetrics)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("SetAlarmState should fail when given bad input", done => {
    const client = new CloudWatchClient({
      region: defaultRegion,
      credentials
    });

    const setAlarmState = new SetAlarmStateCommand({
      AlarmName: "abc",
      StateValue: "mno",
      StateReason: "xyz"
    });

    client
      .send(setAlarmState)
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
