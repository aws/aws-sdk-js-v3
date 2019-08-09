import { UpdateDeviceInstanceInput } from "./UpdateDeviceInstanceInput";
import { UpdateDeviceInstanceOutput } from "./UpdateDeviceInstanceOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
