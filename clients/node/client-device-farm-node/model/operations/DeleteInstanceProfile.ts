import { DeleteInstanceProfileInput } from "../shapes/DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "../shapes/DeleteInstanceProfileOutput";
import { ArgumentException } from "../shapes/ArgumentException";
import { NotFoundException } from "../shapes/NotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceAccountException } from "../shapes/ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteInstanceProfile: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteInstanceProfile",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteInstanceProfileInput
  },
  output: {
    shape: DeleteInstanceProfileOutput
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
