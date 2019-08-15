import { UpdateDeviceInstanceInput } from "../shapes/UpdateDeviceInstanceInput";
import { UpdateDeviceInstanceOutput } from "../shapes/UpdateDeviceInstanceOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateDeviceInstance: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDeviceInstance",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateDeviceInstanceInput
  },
  output: {
    shape: UpdateDeviceInstanceOutput
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
