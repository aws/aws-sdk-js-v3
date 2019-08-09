import { CloudHSMV2Client } from "../../CloudHSMV2Client";
import { DescribeClustersCommand } from "../../commands/DescribeClustersCommand";
import { ListTagsCommand } from "../../commands/ListTagsCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudHSM V2.");

  await (async () => {
    const client = new CloudHSMV2Client({
      region: defaultRegion
    });

    const command = new DescribeClustersCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CloudHSM V2 DescribeClusters - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CloudHSM V2 DescribeClusters - no error expected from service"
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
    const client = new CloudHSMV2Client({
      region: defaultRegion
    });

    const command = new ListTagsCommand({
      ResourceId: "bogus-arn"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok CloudHSM V2 ListTags - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok CloudHSM V2 ListTags - error expected from service");
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
