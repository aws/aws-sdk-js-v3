import { CloudTrailClient } from "../../CloudTrailClient";
import { DescribeTrailsCommand } from "../../commands/DescribeTrailsCommand";
import { DeleteTrailCommand } from "../../commands/DeleteTrailCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudTrail.");

  await (async () => {
    const client = new CloudTrailClient({
      region: defaultRegion
    });

    const command = new DescribeTrailsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CloudTrail DescribeTrails - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CloudTrail DescribeTrails - no error expected from service"
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
    const client = new CloudTrailClient({
      region: defaultRegion
    });

    const command = new DeleteTrailCommand({
      Name: "faketrail"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CloudTrail DeleteTrail - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok CloudTrail DeleteTrail - error expected from service");
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
