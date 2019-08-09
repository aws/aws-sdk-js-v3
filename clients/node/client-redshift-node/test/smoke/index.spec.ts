import { RedshiftClient } from "../../RedshiftClient";
import { DescribeClusterVersionsCommand } from "../../commands/DescribeClusterVersionsCommand";
import { DescribeClustersCommand } from "../../commands/DescribeClustersCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Redshift.");

  await (async () => {
    const client = new RedshiftClient({
      region: defaultRegion
    });

    const command = new DescribeClusterVersionsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Redshift DescribeClusterVersions - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Redshift DescribeClusterVersions - no error expected from service"
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
    const client = new RedshiftClient({
      region: defaultRegion
    });

    const command = new DescribeClustersCommand({
      ClusterIdentifier: "fake-cluster"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Redshift DescribeClusters - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok Redshift DescribeClusters - error expected from service");
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
