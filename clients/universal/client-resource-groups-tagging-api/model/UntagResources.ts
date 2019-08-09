import { UntagResourcesInput } from "./UntagResourcesInput";
import { UntagResourcesOutput } from "./UntagResourcesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
