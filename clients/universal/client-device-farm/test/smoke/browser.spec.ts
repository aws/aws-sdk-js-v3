import { DeviceFarmClient } from "../../DeviceFarmClient";
import { ListDevicesCommand } from "../../commands/ListDevicesCommand";
import { GetDeviceCommand } from "../../commands/GetDeviceCommand";
declare let defaultRegion: string;
declare const credentials: any;
describe("@aws-sdk/client-device-farm Smoke Tests:", () => {
  defaultRegion = defaultRegion || "us-west-2";
  it("ListDevices should succeed when given correct input", done => {
    const client = new DeviceFarmClient({
      region: defaultRegion,
      credentials
    });

    const listDevices = new ListDevicesCommand({});

    client
      .send(listDevices)
      .then(result => {
        expect(typeof result).toBe("object");
        done();
      })
      .catch(err => {
        expect(err).toBeUndefined();
        done();
      });
  });
  it("GetDevice should fail when given bad input", done => {
    const client = new DeviceFarmClient({
      region: defaultRegion,
      credentials
    });

    const getDevice = new GetDeviceCommand({
      arn:
        "arn:aws:devicefarm:us-west-2::device:000000000000000000000000fake-arn"
    });

    client
      .send(getDevice)
      .then(result => {
        expect(result).toBeUndefined();
        done();
      })
      .catch(err => {
        expect(err).toBeDefined();
        done();
      });
  });
});
