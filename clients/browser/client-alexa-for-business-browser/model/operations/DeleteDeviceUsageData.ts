import { DeleteDeviceUsageDataInput } from "../shapes/DeleteDeviceUsageDataInput";
import { DeleteDeviceUsageDataOutput } from "../shapes/DeleteDeviceUsageDataOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { DeviceNotRegisteredException } from "../shapes/DeviceNotRegisteredException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
