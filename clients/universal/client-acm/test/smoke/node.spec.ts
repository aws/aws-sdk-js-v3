import { ACMClient } from "../../ACMClient";
import { ListCertificatesCommand } from "../../commands/ListCertificatesCommand";
import { GetCertificateCommand } from "../../commands/GetCertificateCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for ACM.");

  await (async () => {
    const client = new ACMClient({
      region: defaultRegion
    });

    const command = new ListCertificatesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log("ok ACM ListCertificates - no error expected from service");
    } catch (err) {
      console.log(
        "not ok ACM ListCertificates - no error expected from service"
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
    const client = new ACMClient({
      region: defaultRegion
    });

    const command = new GetCertificateCommand({
      CertificateArn:
        "arn:aws:acm:region:123456789012:certificate/12345678-1234-1234-1234-123456789012"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok ACM GetCertificate - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok ACM GetCertificate - error expected from service");
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
