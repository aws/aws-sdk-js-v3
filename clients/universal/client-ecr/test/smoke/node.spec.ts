import { ECRClient } from "../../ECRClient";
import { DescribeRepositoriesCommand } from "../../commands/DescribeRepositoriesCommand";
import { ListImagesCommand } from "../../commands/ListImagesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for ECR.");

  await (async () => {
    const client = new ECRClient({
      region: defaultRegion
    });

    const command = new DescribeRepositoriesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok ECR DescribeRepositories - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok ECR DescribeRepositories - no error expected from service"
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
    const client = new ECRClient({
      region: defaultRegion
    });

    const command = new ListImagesCommand({
      repositoryName: "not-a-real-repository"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok ECR ListImages - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok ECR ListImages - error expected from service");
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
