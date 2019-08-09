import { UpdateDeviceInput } from "./UpdateDeviceInput";
import { UpdateDeviceOutput } from "./UpdateDeviceOutput";
import { NotFoundException } from "./NotFoundException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
