import { UntagResourceInput } from "../shapes/UntagResourceInput";
import { UntagResourceOutput } from "../shapes/UntagResourceOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { InternalServiceFault } from "../shapes/InternalServiceFault";
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
    shape: UntagResourceOutput,
    resultWrapper: "UntagResourceResult"
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ConcurrentModificationException
    },
    {
      shape: InternalServiceFault
    }
  ]
};
