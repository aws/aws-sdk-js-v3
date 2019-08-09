import { CognitoIdentityProviderClient } from "../../CognitoIdentityProviderClient";
import { ListUserPoolsCommand } from "../../commands/ListUserPoolsCommand";
import { DescribeUserPoolCommand } from "../../commands/DescribeUserPoolCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Cognito Identity Provider.");

  await (async () => {
    const client = new CognitoIdentityProviderClient({
      region: defaultRegion
    });

    const command = new ListUserPoolsCommand({
      MaxResults: 10
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Cognito Identity Provider ListUserPools - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Cognito Identity Provider ListUserPools - no error expected from service"
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
    const client = new CognitoIdentityProviderClient({
      region: defaultRegion
    });

    const command = new DescribeUserPoolCommand({
      UserPoolId: "us-east-1:aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Cognito Identity Provider DescribeUserPool - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Cognito Identity Provider DescribeUserPool - error expected from service"
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
