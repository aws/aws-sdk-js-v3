import { KinesisClient } from "../../KinesisClient";
import { ListStreamsCommand } from "../../commands/ListStreamsCommand";
import { DescribeStreamCommand } from "../../commands/DescribeStreamCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Kinesis.");

  await (async () => {
    const client = new KinesisClient({
      region: defaultRegion
    });

    const command = new ListStreamsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok Kinesis ListStreams - no error expected from service");
    } catch (err) {
      console.log(
        "not ok Kinesis ListStreams - no error expected from service"
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
    const client = new KinesisClient({
      region: defaultRegion
    });

    const command = new DescribeStreamCommand({
      StreamName: "bogus-stream-name"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Kinesis DescribeStream - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log("ok Kinesis DescribeStream - error expected from service");
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
