import { CreateDevicePoolInput } from "./CreateDevicePoolInput";
import { CreateDevicePoolOutput } from "./CreateDevicePoolOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
