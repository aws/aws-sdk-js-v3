import { DatabaseMigrationServiceClient } from "../../DatabaseMigrationServiceClient";
import { DescribeEndpointsCommand } from "../../commands/DescribeEndpointsCommand";
import { DescribeTableStatisticsCommand } from "../../commands/DescribeTableStatisticsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Database Migration Service.");

  await (async () => {
    const client = new DatabaseMigrationServiceClient({
      region: defaultRegion
    });

    const command = new DescribeEndpointsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Database Migration Service DescribeEndpoints - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Database Migration Service DescribeEndpoints - no error expected from service"
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
    const client = new DatabaseMigrationServiceClient({
      region: defaultRegion
    });

    const command = new DescribeTableStatisticsCommand({
      ReplicationTaskArn: "arn:aws:acm:region:123456789012"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Database Migration Service DescribeTableStatistics - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Database Migration Service DescribeTableStatistics - error expected from service"
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
