import { DeleteDeviceUsageDataInput } from "./DeleteDeviceUsageDataInput";
import { DeleteDeviceUsageDataOutput } from "./DeleteDeviceUsageDataOutput";
import { NotFoundException } from "./NotFoundException";
import { DeviceNotRegisteredException } from "./DeviceNotRegisteredException";
import { LimitExceededException } from "./LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteDeviceUsageData: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDeviceUsageData",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDeviceUsageDataInput
  },
  output: {
    shape: DeleteDeviceUsageDataOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: DeviceNotRegisteredException
    },
    {
      shape: LimitExceededException
    }
  ]
};
