import { CreateInstanceProfileInput } from "../shapes/CreateInstanceProfileInput";
import { CreateInstanceProfileOutput } from "../shapes/CreateInstanceProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateInstanceProfileInput
  },
  output: {
    shape: CreateInstanceProfileOutput
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
