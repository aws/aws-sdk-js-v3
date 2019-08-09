import { GetInstanceProfileInput } from "./GetInstanceProfileInput";
import { GetInstanceProfileOutput } from "./GetInstanceProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
