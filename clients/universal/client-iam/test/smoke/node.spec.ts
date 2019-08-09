import { IAMClient } from "../../IAMClient";
import { ListUsersCommand } from "../../commands/ListUsersCommand";
import { GetUserCommand } from "../../commands/GetUserCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-east-1";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for IAM.");

  await (async () => {
    const client = new IAMClient({
      region: defaultRegion
    });

    const command = new ListUsersCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok IAM ListUsers - no error expected from service");
    } catch (err) {
      console.log("not ok IAM ListUsers - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new IAMClient({
      region: defaultRegion
    });

    const command = new GetUserCommand({
      UserName: "fake_user"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok IAM GetUser - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok IAM GetUser - error expected from service");
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
