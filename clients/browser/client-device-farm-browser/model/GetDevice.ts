import { GetDeviceInput } from "./GetDeviceInput";
import { GetDeviceOutput } from "./GetDeviceOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDevice: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevice",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeviceInput
  },
  output: {
    shape: GetDeviceOutput
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
