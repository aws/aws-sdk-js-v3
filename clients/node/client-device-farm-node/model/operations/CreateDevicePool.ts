import { CreateDevicePoolInput } from "../shapes/CreateDevicePoolInput";
import { CreateDevicePoolOutput } from "../shapes/CreateDevicePoolOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateDevicePool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateDevicePool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateDevicePoolInput
  },
  output: {
    shape: CreateDevicePoolOutput
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
