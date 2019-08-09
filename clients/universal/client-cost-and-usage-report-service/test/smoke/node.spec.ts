import { CostandUsageReportServiceClient } from "../../CostandUsageReportServiceClient";
import { DescribeReportDefinitionsCommand } from "../../commands/DescribeReportDefinitionsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-east-1";
  let testFailed = false;
  console.log("1..1");
  console.log("# Running tests for Cost and Usage Report Service.");

  await (async () => {
    const client = new CostandUsageReportServiceClient({
      region: defaultRegion
    });

    const command = new DescribeReportDefinitionsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Cost and Usage Report Service DescribeReportDefinitions - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Cost and Usage Report Service DescribeReportDefinitions - no error expected from service"
      );
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
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
