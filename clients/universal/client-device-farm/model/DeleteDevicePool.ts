import { DeleteDevicePoolInput } from "./DeleteDevicePoolInput";
import { DeleteDevicePoolOutput } from "./DeleteDevicePoolOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
