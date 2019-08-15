import { DeleteDevicePoolInput } from "../shapes/DeleteDevicePoolInput";
import { DeleteDevicePoolOutput } from "../shapes/DeleteDevicePoolOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDevicePool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDevicePool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDevicePoolInput
  },
  output: {
    shape: DeleteDevicePoolOutput
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
