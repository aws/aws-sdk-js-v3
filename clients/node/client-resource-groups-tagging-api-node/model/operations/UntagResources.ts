import { UntagResourcesInput } from "../shapes/UntagResourcesInput";
import { UntagResourcesOutput } from "../shapes/UntagResourcesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UntagResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UntagResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UntagResourcesInput
  },
  output: {
    shape: UntagResourcesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ThrottledException
    },
    {
      shape: InternalServiceException
    }
  ]
};
