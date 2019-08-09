import { CloudWatchLogsClient } from "../../CloudWatchLogsClient";
import { DescribeLogGroupsCommand } from "../../commands/DescribeLogGroupsCommand";
import { GetLogEventsCommand } from "../../commands/GetLogEventsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudWatch Logs.");

  await (async () => {
    const client = new CloudWatchLogsClient({
      region: defaultRegion
    });

    const command = new DescribeLogGroupsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CloudWatch Logs DescribeLogGroups - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CloudWatch Logs DescribeLogGroups - no error expected from service"
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
    const client = new CloudWatchLogsClient({
      region: defaultRegion
    });

    const command = new GetLogEventsCommand({
      logGroupName: "fakegroup",
      logStreamName: "fakestream"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CloudWatch Logs GetLogEvents - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok CloudWatch Logs GetLogEvents - error expected from service"
      );
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
