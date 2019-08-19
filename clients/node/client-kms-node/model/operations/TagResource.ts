import { TagResourceInput } from "../shapes/TagResourceInput";
import { TagResourceOutput } from "../shapes/TagResourceOutput";
import { KMSInternalException } from "../shapes/KMSInternalException";
import { NotFoundException } from "../shapes/NotFoundException";
import { InvalidArnException } from "../shapes/InvalidArnException";
import { KMSInvalidStateException } from "../shapes/KMSInvalidStateException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { TagException } from "../shapes/TagException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourceInput
  },
  output: {
    shape: TagResourceOutput
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
      shape: LimitExceededException
    },
    {
      shape: TagException
    }
  ]
};
