import { GetDevicePoolCompatibilityInput } from "./GetDevicePoolCompatibilityInput";
import { GetDevicePoolCompatibilityOutput } from "./GetDevicePoolCompatibilityOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
