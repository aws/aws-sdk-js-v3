import { MTurkClient } from "../../MTurkClient";
import { GetAccountBalanceCommand } from "../../commands/GetAccountBalanceCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-east-1";
  let testFailed = false;
  console.log("1..1");
  console.log("# Running tests for MTurk.");

  await (async () => {
    const client = new MTurkClient({
      region: defaultRegion
    });

    const command = new GetAccountBalanceCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok MTurk GetAccountBalance - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok MTurk GetAccountBalance - no error expected from service"
      );
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
