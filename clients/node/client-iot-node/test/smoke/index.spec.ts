import { IoTClient } from "../../IoTClient";
import { ListPoliciesCommand } from "../../commands/ListPoliciesCommand";
import { DescribeThingCommand } from "../../commands/DescribeThingCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for IoT.");

  await (async () => {
    const client = new IoTClient({
      region: defaultRegion
    });

    const command = new ListPoliciesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok IoT ListPolicies - no error expected from service");
    } catch (err) {
      console.log("not ok IoT ListPolicies - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new IoTClient({
      region: defaultRegion
    });

    const command = new DescribeThingCommand({
      thingName: "fake-thing"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok IoT DescribeThing - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok IoT DescribeThing - error expected from service");
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
