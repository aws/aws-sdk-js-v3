import { DeleteInstanceProfileInput } from "./DeleteInstanceProfileInput";
import { DeleteInstanceProfileOutput } from "./DeleteInstanceProfileOutput";
import { ArgumentException } from "./ArgumentException";
import { NotFoundException } from "./NotFoundException";
import { LimitExceededException } from "./LimitExceededException";
import { ServiceAccountException } from "./ServiceAccountException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
