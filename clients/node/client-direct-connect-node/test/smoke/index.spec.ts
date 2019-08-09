import { DirectConnectClient } from "../../DirectConnectClient";
import { DescribeConnectionsCommand } from "../../commands/DescribeConnectionsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Direct Connect.");

  await (async () => {
    const client = new DirectConnectClient({
      region: defaultRegion
    });

    const command = new DescribeConnectionsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Direct Connect DescribeConnections - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Direct Connect DescribeConnections - no error expected from service"
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
    const client = new DirectConnectClient({
      region: defaultRegion
    });

    const command = new DescribeConnectionsCommand({
      connectionId: "fake-connection"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Direct Connect DescribeConnections - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Direct Connect DescribeConnections - error expected from service"
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
