import { GetDevicePoolCompatibilityInput } from "../shapes/GetDevicePoolCompatibilityInput";
import { GetDevicePoolCompatibilityOutput } from "../shapes/GetDevicePoolCompatibilityOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetDevicePoolCompatibility: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDevicePoolCompatibility",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDevicePoolCompatibilityInput
  },
  output: {
    shape: GetDevicePoolCompatibilityOutput
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
