import { EFSClient } from "../../EFSClient";
import { DescribeFileSystemsCommand } from "../../commands/DescribeFileSystemsCommand";
import { DeleteFileSystemCommand } from "../../commands/DeleteFileSystemCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for EFS.");

  await (async () => {
    const client = new EFSClient({
      region: defaultRegion
    });

    const command = new DescribeFileSystemsCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok EFS DescribeFileSystems - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok EFS DescribeFileSystems - no error expected from service"
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
    const client = new EFSClient({
      region: defaultRegion
    });

    const command = new DeleteFileSystemCommand({
      FileSystemId: "fs-c5a1446c"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok EFS DeleteFileSystem - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok EFS DeleteFileSystem - error expected from service");
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
