import { SecretsManagerClient } from "../../SecretsManagerClient";
import { ListSecretsCommand } from "../../commands/ListSecretsCommand";
import { DescribeSecretCommand } from "../../commands/DescribeSecretCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Secrets Manager.");

  await (async () => {
    const client = new SecretsManagerClient({
      region: defaultRegion
    });

    const command = new ListSecretsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Secrets Manager ListSecrets - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Secrets Manager ListSecrets - no error expected from service"
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
    const client = new SecretsManagerClient({
      region: defaultRegion
    });

    const command = new DescribeSecretCommand({
      SecretId: "fake-secret-id"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Secrets Manager DescribeSecret - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Secrets Manager DescribeSecret - error expected from service"
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
