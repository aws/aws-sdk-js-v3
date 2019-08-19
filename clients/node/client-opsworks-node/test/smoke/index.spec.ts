import { OpsWorksClient } from "../../OpsWorksClient";
import { DescribeStacksCommand } from "../../commands/DescribeStacksCommand";
import { DescribeLayersCommand } from "../../commands/DescribeLayersCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for OpsWorks.");

  await (async () => {
    const client = new OpsWorksClient({
      region: defaultRegion
    });

    const command = new DescribeStacksCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok OpsWorks DescribeStacks - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok OpsWorks DescribeStacks - no error expected from service"
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
    const client = new OpsWorksClient({
      region: defaultRegion
    });

    const command = new DescribeLayersCommand({
      StackId: "fake_stack"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok OpsWorks DescribeLayers - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok OpsWorks DescribeLayers - error expected from service");
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
