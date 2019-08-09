import { ElasticTranscoderClient } from "../../ElasticTranscoderClient";
import { ListPresetsCommand } from "../../commands/ListPresetsCommand";
import { ReadJobCommand } from "../../commands/ReadJobCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Elastic Transcoder.");

  await (async () => {
    const client = new ElasticTranscoderClient({
      region: defaultRegion
    });

    const command = new ListPresetsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Elastic Transcoder ListPresets - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Elastic Transcoder ListPresets - no error expected from service"
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
    const client = new ElasticTranscoderClient({
      region: defaultRegion
    });

    const command = new ReadJobCommand({
      Id: "fake_job"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Elastic Transcoder ReadJob - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Elastic Transcoder ReadJob - error expected from service"
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
