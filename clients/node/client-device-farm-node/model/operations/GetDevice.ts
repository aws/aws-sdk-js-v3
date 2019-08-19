import { GetDeviceInput } from "../shapes/GetDeviceInput";
import { GetDeviceOutput } from "../shapes/GetDeviceOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
