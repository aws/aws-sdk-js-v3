import { GameLiftClient } from "../../GameLiftClient";
import { ListBuildsCommand } from "../../commands/ListBuildsCommand";
import { DescribePlayerSessionsCommand } from "../../commands/DescribePlayerSessionsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for GameLift.");

  await (async () => {
    const client = new GameLiftClient({
      region: defaultRegion
    });

    const command = new ListBuildsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok GameLift ListBuilds - no error expected from service");
    } catch (err) {
      console.log(
        "not ok GameLift ListBuilds - no error expected from service"
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
    const client = new GameLiftClient({
      region: defaultRegion
    });

    const command = new DescribePlayerSessionsCommand({
      PlayerSessionId: "psess-fakeSessionId"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok GameLift DescribePlayerSessions - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok GameLift DescribePlayerSessions - error expected from service"
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
