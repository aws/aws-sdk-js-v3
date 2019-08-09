import { DirectoryServiceClient } from "../../DirectoryServiceClient";
import { DescribeDirectoriesCommand } from "../../commands/DescribeDirectoriesCommand";
import { CreateDirectoryCommand } from "../../commands/CreateDirectoryCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Directory Service.");

  await (async () => {
    const client = new DirectoryServiceClient({
      region: defaultRegion
    });

    const command = new DescribeDirectoriesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Directory Service DescribeDirectories - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Directory Service DescribeDirectories - no error expected from service"
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
    const client = new DirectoryServiceClient({
      region: defaultRegion
    });

    const command = new CreateDirectoryCommand({
      Name: "",
      Password: "",
      Size: ""
    } as any);

    try {
      const result = await client.send(command);
      console.log(
        "not ok Directory Service CreateDirectory - error expected from service"
      );
      testFailed = true;
    } catch (err) {
      console.log(
        "ok Directory Service CreateDirectory - error expected from service"
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
