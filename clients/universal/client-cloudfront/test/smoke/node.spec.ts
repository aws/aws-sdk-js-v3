import { CloudFrontClient } from "../../CloudFrontClient";
import { ListCloudFrontOriginAccessIdentitiesCommand } from "../../commands/ListCloudFrontOriginAccessIdentitiesCommand";
import { GetDistributionCommand } from "../../commands/GetDistributionCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-east-1";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for CloudFront.");

  await (async () => {
    const client = new CloudFrontClient({
      region: defaultRegion
    });

    const command = new ListCloudFrontOriginAccessIdentitiesCommand({
      MaxItems: "1"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok CloudFront ListCloudFrontOriginAccessIdentities - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok CloudFront ListCloudFrontOriginAccessIdentities - no error expected from service"
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
    const client = new CloudFrontClient({
      region: defaultRegion
    });

    const command = new GetDistributionCommand({
      Id: "fake-id"
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok CloudFront GetDistribution - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok CloudFront GetDistribution - error expected from service"
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
