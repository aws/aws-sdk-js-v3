import { GetDeviceInstanceInput } from "./GetDeviceInstanceInput";
import { GetDeviceInstanceOutput } from "./GetDeviceInstanceOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDeviceInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDeviceInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDeviceInstanceInput
  },
  output: {
    shape: GetDeviceInstanceOutput
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
