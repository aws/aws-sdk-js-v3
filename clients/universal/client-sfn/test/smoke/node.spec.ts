import { SFNClient } from "../../SFNClient";
import { ListActivitiesCommand } from "../../commands/ListActivitiesCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..1");
  console.log("# Running tests for SFN.");

  await (async () => {
    const client = new SFNClient({
      region: defaultRegion
    });

    const command = new ListActivitiesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok SFN ListActivities - no error expected from service");
    } catch (err) {
      console.log("not ok SFN ListActivities - no error expected from service");
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
