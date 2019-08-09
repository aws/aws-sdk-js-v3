import { CloudWatchEventsClient } from "../../CloudWatchEventsClient";
import { ListRulesCommand } from "../../commands/ListRulesCommand";
import { DescribeRuleCommand } from "../../commands/DescribeRuleCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-cloudwatch-events Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListRules should succeed when given correct input", done => {
    const client = new CloudWatchEventsClient({
      region: defaultRegion,
      credentials
    });

    const listRules = new ListRulesCommand({});

    client
      .send(listRules)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("DescribeRule should fail when given bad input", done => {
    const client = new CloudWatchEventsClient({
      region: defaultRegion,
      credentials
    });

    const describeRule = new DescribeRuleCommand({
      Name: "fake-rule"
    });

    client
      .send(describeRule)
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
