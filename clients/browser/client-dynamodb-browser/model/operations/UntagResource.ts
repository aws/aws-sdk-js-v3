import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerError } from "../shapes/InternalServerError";
import { ResourceInUseException } from "../shapes/ResourceInUseException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourceInput
  },
  output: {
    shape: UntagResourceOutput
  },
  errors: [
    {
      shape: LimitExceededException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerError
    },
    {
      shape: ResourceInUseException
    }
  ]
};
