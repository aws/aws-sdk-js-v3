import { GetDevicePoolInput } from "./GetDevicePoolInput";
import { GetDevicePoolOutput } from "./GetDevicePoolOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDevicePool: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevicePool",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDevicePoolInput
  },
  output: {
    shape: GetDevicePoolOutput
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
