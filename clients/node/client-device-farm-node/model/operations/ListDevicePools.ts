import { ListDevicePoolsInput } from "../shapes/ListDevicePoolsInput";
import { ListDevicePoolsOutput } from "../shapes/ListDevicePoolsOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListDevicePools: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListDevicePools",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListDevicePoolsInput
  },
  output: {
    shape: ListDevicePoolsOutput
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
