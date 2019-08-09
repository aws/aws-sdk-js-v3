import { CloudWatchEventsClient } from "../../CloudWatchEventsClient";
import { ListRulesCommand } from "../../commands/ListRulesCommand";
import { DescribeRuleCommand } from "../../commands/DescribeRuleCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudWatch Events.");

  await (async () => {
    const client = new CloudWatchEventsClient({
      region: defaultRegion
    });

    const command = new ListRulesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CloudWatch Events ListRules - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CloudWatch Events ListRules - no error expected from service"
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
    const client = new CloudWatchEventsClient({
      region: defaultRegion
    });

    const command = new DescribeRuleCommand({
      Name: "fake-rule"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CloudWatch Events DescribeRule - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok CloudWatch Events DescribeRule - error expected from service"
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
