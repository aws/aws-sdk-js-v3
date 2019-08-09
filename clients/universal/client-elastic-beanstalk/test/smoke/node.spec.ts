import { ElasticBeanstalkClient } from "../../ElasticBeanstalkClient";
import { ListAvailableSolutionStacksCommand } from "../../commands/ListAvailableSolutionStacksCommand";
import { DescribeEnvironmentResourcesCommand } from "../../commands/DescribeEnvironmentResourcesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Elastic Beanstalk.");

  await (async () => {
    const client = new ElasticBeanstalkClient({
      region: defaultRegion
    });

    const command = new ListAvailableSolutionStacksCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Elastic Beanstalk ListAvailableSolutionStacks - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Elastic Beanstalk ListAvailableSolutionStacks - no error expected from service"
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
    const client = new ElasticBeanstalkClient({
      region: defaultRegion
    });

    const command = new DescribeEnvironmentResourcesCommand({
      EnvironmentId: "fake_environment"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Elastic Beanstalk DescribeEnvironmentResources - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Elastic Beanstalk DescribeEnvironmentResources - error expected from service"
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
