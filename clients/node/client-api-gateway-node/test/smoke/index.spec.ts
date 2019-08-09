import { APIGatewayClient } from "../../APIGatewayClient";
import { GetDomainNamesCommand } from "../../commands/GetDomainNamesCommand";
import { CreateUsagePlanKeyCommand } from "../../commands/CreateUsagePlanKeyCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for API Gateway.");

  await (async () => {
    const client = new APIGatewayClient({
      region: defaultRegion
    });

    const command = new GetDomainNamesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok API Gateway GetDomainNames - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok API Gateway GetDomainNames - no error expected from service"
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
    const client = new APIGatewayClient({
      region: defaultRegion
    });

    const command = new CreateUsagePlanKeyCommand({
      usagePlanId: "foo",
      keyId: "bar",
      keyType: "fixx"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok API Gateway CreateUsagePlanKey - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok API Gateway CreateUsagePlanKey - error expected from service"
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
