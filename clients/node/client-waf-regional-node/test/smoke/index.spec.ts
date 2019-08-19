import { WAFRegionalClient } from "../../WAFRegionalClient";
import { ListRulesCommand } from "../../commands/ListRulesCommand";
import { CreateSqlInjectionMatchSetCommand } from "../../commands/CreateSqlInjectionMatchSetCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-east-1";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for WAF Regional.");

  await (async () => {
    const client = new WAFRegionalClient({
      region: defaultRegion
    });

    const command = new ListRulesCommand({
      Limit: 20
    } as any);

    try {
      const result = await client.send(command);
      console.log("ok WAF Regional ListRules - no error expected from service");
    } catch (err) {
      console.log(
        "not ok WAF Regional ListRules - no error expected from service"
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
    const client = new WAFRegionalClient({
      region: defaultRegion
    });

    const command = new CreateSqlInjectionMatchSetCommand({
      Name: "fake_name",
      ChangeToken: "fake_token"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok WAF Regional CreateSqlInjectionMatchSet - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok WAF Regional CreateSqlInjectionMatchSet - error expected from service"
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
