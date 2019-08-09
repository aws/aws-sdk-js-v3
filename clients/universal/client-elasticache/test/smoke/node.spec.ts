import { ElastiCacheClient } from "../../ElastiCacheClient";
import { DescribeEventsCommand } from "../../commands/DescribeEventsCommand";
import { DescribeCacheClustersCommand } from "../../commands/DescribeCacheClustersCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for ElastiCache.");

  await (async () => {
    const client = new ElastiCacheClient({
      region: defaultRegion
    });

    const command = new DescribeEventsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok ElastiCache DescribeEvents - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok ElastiCache DescribeEvents - no error expected from service"
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
    const client = new ElastiCacheClient({
      region: defaultRegion
    });

    const command = new DescribeCacheClustersCommand({
      CacheClusterId: "fake_cluster"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok ElastiCache DescribeCacheClusters - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok ElastiCache DescribeCacheClusters - error expected from service"
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
