import { CodeDeployClient } from "../../CodeDeployClient";
import { ListApplicationsCommand } from "../../commands/ListApplicationsCommand";
import { GetDeploymentCommand } from "../../commands/GetDeploymentCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CodeDeploy.");

  await (async () => {
    const client = new CodeDeployClient({
      region: defaultRegion
    });

    const command = new ListApplicationsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CodeDeploy ListApplications - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CodeDeploy ListApplications - no error expected from service"
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
    const client = new CodeDeployClient({
      region: defaultRegion
    });

    const command = new GetDeploymentCommand({
      deploymentId: "d-USUAELQEX"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CodeDeploy GetDeployment - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok CodeDeploy GetDeployment - error expected from service");
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
