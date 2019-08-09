import { Route53ResolverClient } from "../../Route53ResolverClient";
import { ListResolverEndpointsCommand } from "../../commands/ListResolverEndpointsCommand";
import { GetResolverRuleCommand } from "../../commands/GetResolverRuleCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Route53Resolver.");

  await (async () => {
    const client = new Route53ResolverClient({
      region: defaultRegion
    });

    const command = new ListResolverEndpointsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Route53Resolver ListResolverEndpoints - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Route53Resolver ListResolverEndpoints - no error expected from service"
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
    const client = new Route53ResolverClient({
      region: defaultRegion
    });

    const command = new GetResolverRuleCommand({
      ResolverRuleId: "fake-id"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Route53Resolver GetResolverRule - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Route53Resolver GetResolverRule - error expected from service"
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
