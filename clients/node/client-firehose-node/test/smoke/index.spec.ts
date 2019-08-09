import { FirehoseClient } from "../../FirehoseClient";
import { ListDeliveryStreamsCommand } from "../../commands/ListDeliveryStreamsCommand";
import { DescribeDeliveryStreamCommand } from "../../commands/DescribeDeliveryStreamCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Firehose.");

  await (async () => {
    const client = new FirehoseClient({
      region: defaultRegion
    });

    const command = new ListDeliveryStreamsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Firehose ListDeliveryStreams - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Firehose ListDeliveryStreams - no error expected from service"
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
    const client = new FirehoseClient({
      region: defaultRegion
    });

    const command = new DescribeDeliveryStreamCommand({
      DeliveryStreamName: "bogus-stream-name"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Firehose DescribeDeliveryStream - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Firehose DescribeDeliveryStream - error expected from service"
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
