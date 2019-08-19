import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { TooManyTagKeysException } from "../shapes/TooManyTagKeysException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InternalServerException } from "../shapes/InternalServerException";
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
      shape: TooManyTagKeysException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InternalServerException
    }
  ]
};
