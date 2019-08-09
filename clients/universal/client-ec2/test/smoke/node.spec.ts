import { EC2Client } from "../../EC2Client";
import { DescribeRegionsCommand } from "../../commands/DescribeRegionsCommand";
import { DescribeInstancesCommand } from "../../commands/DescribeInstancesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for EC2.");

  await (async () => {
    const client = new EC2Client({
      region: defaultRegion
    });

    const command = new DescribeRegionsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok EC2 DescribeRegions - no error expected from service");
    } catch (err) {
      console.log(
        "not ok EC2 DescribeRegions - no error expected from service"
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
    const client = new EC2Client({
      region: defaultRegion
    });

    const command = new DescribeInstancesCommand({
      InstanceIds: ["i-12345678"]
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok EC2 DescribeInstances - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok EC2 DescribeInstances - error expected from service");
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
