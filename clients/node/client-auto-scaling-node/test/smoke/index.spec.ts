import { AutoScalingClient } from "../../AutoScalingClient";
import { DescribeScalingProcessTypesCommand } from "../../commands/DescribeScalingProcessTypesCommand";
import { CreateLaunchConfigurationCommand } from "../../commands/CreateLaunchConfigurationCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Auto Scaling.");

  await (async () => {
    const client = new AutoScalingClient({
      region: defaultRegion
    });

    const command = new DescribeScalingProcessTypesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Auto Scaling DescribeScalingProcessTypes - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Auto Scaling DescribeScalingProcessTypes - no error expected from service"
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
    const client = new AutoScalingClient({
      region: defaultRegion
    });

    const command = new CreateLaunchConfigurationCommand({
      LaunchConfigurationName: "hello, world",
      ImageId: "ami-12345678",
      InstanceType: "m1.small"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Auto Scaling CreateLaunchConfiguration - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Auto Scaling CreateLaunchConfiguration - error expected from service"
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
