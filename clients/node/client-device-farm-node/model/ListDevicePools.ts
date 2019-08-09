import { ListDevicePoolsInput } from "./ListDevicePoolsInput";
import { ListDevicePoolsOutput } from "./ListDevicePoolsOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
