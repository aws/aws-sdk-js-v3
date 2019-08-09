import { CloudWatchClient } from "../../CloudWatchClient";
import { ListMetricsCommand } from "../../commands/ListMetricsCommand";
import { SetAlarmStateCommand } from "../../commands/SetAlarmStateCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudWatch.");

  await (async () => {
    const client = new CloudWatchClient({
      region: defaultRegion
    });

    const command = new ListMetricsCommand({
      Namespace: "AWS/EC2"
    } as any);

    try {
      const result = await client.send(command);
      console.log("ok CloudWatch ListMetrics - no error expected from service");
    } catch (err) {
      console.log(
        "not ok CloudWatch ListMetrics - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new CloudWatchClient({
      region: defaultRegion
    });

    const command = new SetAlarmStateCommand({
      AlarmName: "abc",
      StateValue: "mno",
      StateReason: "xyz"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CloudWatch SetAlarmState - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok CloudWatch SetAlarmState - error expected from service");
    }
  })();

  if (testFailed) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

// execute the test runner
smokeTestRunner();
