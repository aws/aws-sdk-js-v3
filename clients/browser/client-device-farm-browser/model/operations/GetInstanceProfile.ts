import { GetInstanceProfileInput } from "../shapes/GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "../shapes/GetInstanceProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetInstanceProfileInput
  },
  output: {
    shape: GetInstanceProfileOutput
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
