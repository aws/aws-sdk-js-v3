import { SNSClient } from "../../SNSClient";
import { ListTopicsCommand } from "../../commands/ListTopicsCommand";
import { PublishCommand } from "../../commands/PublishCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for SNS.");

  await (async () => {
    const client = new SNSClient({
      region: defaultRegion
    });

    const command = new ListTopicsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok SNS ListTopics - no error expected from service");
    } catch (err) {
      console.log("not ok SNS ListTopics - no error expected from service");
      // output unexpected error information
      console.log("# " + err.message);
      err.stack.split("\n").forEach((line: string) => {
        console.log("# " + line);
      });
      testFailed = true;
    }
  })();
  await (async () => {
    const client = new SNSClient({
      region: defaultRegion
    });

    const command = new PublishCommand({
      Message: "hello",
      TopicArn: "fake_topic"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok SNS Publish - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok SNS Publish - error expected from service");
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
