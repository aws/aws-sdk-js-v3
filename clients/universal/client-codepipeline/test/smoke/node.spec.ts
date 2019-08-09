import { CodePipelineClient } from "../../CodePipelineClient";
import { ListPipelinesCommand } from "../../commands/ListPipelinesCommand";
import { GetPipelineCommand } from "../../commands/GetPipelineCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CodePipeline.");

  await (async () => {
    const client = new CodePipelineClient({
      region: defaultRegion
    });

    const command = new ListPipelinesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CodePipeline ListPipelines - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CodePipeline ListPipelines - no error expected from service"
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
    const client = new CodePipelineClient({
      region: defaultRegion
    });

    const command = new GetPipelineCommand({
      name: "fake-pipeline"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CodePipeline GetPipeline - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok CodePipeline GetPipeline - error expected from service");
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
