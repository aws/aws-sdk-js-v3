import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { TagException } from "../shapes/TagException";
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
      shape: KMSInternalException
    },
    {
      shape: NotFoundException
    },
    {
      shape: InvalidArnException
    },
    {
      shape: KMSInvalidStateException
    },
    {
      shape: TagException
    }
  ]
};
