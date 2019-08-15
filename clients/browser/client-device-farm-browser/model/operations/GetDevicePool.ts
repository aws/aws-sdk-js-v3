import { GetDevicePoolInput } from "../shapes/GetDevicePoolInput";
import { GetDevicePoolOutput } from "../shapes/GetDevicePoolOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
