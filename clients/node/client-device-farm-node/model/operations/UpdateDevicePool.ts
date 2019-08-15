import { UpdateDevicePoolInput } from "../shapes/UpdateDevicePoolInput";
import { UpdateDevicePoolOutput } from "../shapes/UpdateDevicePoolOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDevicePool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDevicePool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDevicePoolInput
  },
  output: {
    shape: UpdateDevicePoolOutput
  },
  errors: [
    {
      shape: ArgumentException
    },
    {
      shape: NotFoundException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: ServiceAccountException
    }
  ]
};
