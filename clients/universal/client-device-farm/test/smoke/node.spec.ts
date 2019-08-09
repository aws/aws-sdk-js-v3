import { DeviceFarmClient } from "../../DeviceFarmClient";
import { ListDevicesCommand } from "../../commands/ListDevicesCommand";
import { GetDeviceCommand } from "../../commands/GetDeviceCommand";

async function smokeTestRunner() {
  const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || "us-west-2";
  let testFailed = false;
  console.log("1..2");
  console.log("# Running tests for Device Farm.");

  await (async () => {
    const client = new DeviceFarmClient({
      region: defaultRegion
    });

    const command = new ListDevicesCommand({} as any);

    try {
      const result = await client.send(command);
      console.log(
        "ok Device Farm ListDevices - no error expected from service"
      );
    } catch (err) {
      console.log(
        "not ok Device Farm ListDevices - no error expected from service"
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
    const client = new DeviceFarmClient({
      region: defaultRegion
    });

    const command = new GetDeviceCommand({
      arn:
        "arn:aws:devicefarm:us-west-2::device:000000000000000000000000fake-arn"
    } as any);

    try {
      const result = await client.send(command);
      console.log("not ok Device Farm GetDevice - error expected from service");
      testFailed = true;
    } catch (err) {
      console.log("ok Device Farm GetDevice - error expected from service");
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
