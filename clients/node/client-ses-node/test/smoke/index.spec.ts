import { SESClient } from "../../SESClient";
import { ListIdentitiesCommand } from "../../commands/ListIdentitiesCommand";
import { VerifyEmailIdentityCommand } from "../../commands/VerifyEmailIdentityCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for SES.");

  await (async () => {
    const client = new SESClient({
      region: defaultRegion
    });

    const command = new ListIdentitiesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok SES ListIdentities - no error expected from service");
    } catch (err) {
      console.log("not ok SES ListIdentities - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new SESClient({
      region: defaultRegion
    });

    const command = new VerifyEmailIdentityCommand({
      EmailAddress: "fake_email"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok SES VerifyEmailIdentity - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok SES VerifyEmailIdentity - error expected from service");
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
