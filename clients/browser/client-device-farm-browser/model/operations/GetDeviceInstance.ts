import { GetDeviceInstanceInput } from "../shapes/GetDeviceInstanceInput";
import { GetDeviceInstanceOutput } from "../shapes/GetDeviceInstanceOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
