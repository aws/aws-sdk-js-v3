import { UpdateDeviceInput } from "../shapes/UpdateDeviceInput";
import { UpdateDeviceOutput } from "../shapes/UpdateDeviceOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDeviceInput
  },
  output: {
    shape: UpdateDeviceOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: DeviceNotRegisteredException
    }
  ]
};
