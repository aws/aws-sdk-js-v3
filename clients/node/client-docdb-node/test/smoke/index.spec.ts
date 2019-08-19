import { DocDBClient } from "../../DocDBClient";
import { DescribeDBEngineVersionsCommand } from "../../commands/DescribeDBEngineVersionsCommand";
import { DescribeDBInstancesCommand } from "../../commands/DescribeDBInstancesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for DocDB.");

  await (async () => {
    const client = new DocDBClient({
      region: defaultRegion
    });

    const command = new DescribeDBEngineVersionsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok DocDB DescribeDBEngineVersions - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok DocDB DescribeDBEngineVersions - no error expected from service"
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
    const client = new DocDBClient({
      region: defaultRegion
    });

    const command = new DescribeDBInstancesCommand({
      DBInstanceIdentifier: "fake-id"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok DocDB DescribeDBInstances - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok DocDB DescribeDBInstances - error expected from service");
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
