import { ElasticLoadBalancingClient } from "../../ElasticLoadBalancingClient";
import { DescribeLoadBalancersCommand } from "../../commands/DescribeLoadBalancersCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Elastic Load Balancing.");

  await (async () => {
    const client = new ElasticLoadBalancingClient({
      region: defaultRegion
    });

    const command = new DescribeLoadBalancersCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Elastic Load Balancing DescribeLoadBalancers - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Elastic Load Balancing DescribeLoadBalancers - no error expected from service"
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
    const client = new ElasticLoadBalancingClient({
      region: defaultRegion
    });

    const command = new DescribeLoadBalancersCommand({
      LoadBalancerNames: ["fake_load_balancer"]
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Elastic Load Balancing DescribeLoadBalancers - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Elastic Load Balancing DescribeLoadBalancers - error expected from service"
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
