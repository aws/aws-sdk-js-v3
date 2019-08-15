import { StartDeviceSyncInput } from "../shapes/StartDeviceSyncInput";
import { StartDeviceSyncOutput } from "../shapes/StartDeviceSyncOutput";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const StartDeviceSync: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartDeviceSync",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartDeviceSyncInput
  },
  output: {
    shape: StartDeviceSyncOutput
  },
  errors: [
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
