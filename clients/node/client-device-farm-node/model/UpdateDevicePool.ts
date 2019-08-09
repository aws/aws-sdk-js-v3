import { UpdateDevicePoolInput } from "./UpdateDevicePoolInput";
import { UpdateDevicePoolOutput } from "./UpdateDevicePoolOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
