import { EMRClient } from "../../EMRClient";
import { ListClustersCommand } from "../../commands/ListClustersCommand";
import { DescribeClusterCommand } from "../../commands/DescribeClusterCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for EMR.");

  await (async () => {
    const client = new EMRClient({
      region: defaultRegion
    });

    const command = new ListClustersCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok EMR ListClusters - no error expected from service");
    } catch (err) {
      console.log("not ok EMR ListClusters - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new EMRClient({
      region: defaultRegion
    });

    const command = new DescribeClusterCommand({
      ClusterId: "fake_cluster"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok EMR DescribeCluster - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok EMR DescribeCluster - error expected from service");
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
