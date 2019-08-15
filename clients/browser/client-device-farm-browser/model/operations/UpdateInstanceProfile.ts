import { UpdateInstanceProfileInput } from "../shapes/UpdateInstanceProfileInput";
import { UpdateInstanceProfileOutput } from "../shapes/UpdateInstanceProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateInstanceProfileInput
  },
  output: {
    shape: UpdateInstanceProfileOutput
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
