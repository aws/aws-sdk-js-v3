import { UpdateInstanceProfileInput } from "./UpdateInstanceProfileInput";
import { UpdateInstanceProfileOutput } from "./UpdateInstanceProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
