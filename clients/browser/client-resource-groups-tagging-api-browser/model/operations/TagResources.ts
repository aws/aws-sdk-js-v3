import { TagResourcesInput } from "../shapes/TagResourcesInput";
import { TagResourcesOutput } from "../shapes/TagResourcesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ThrottledException } from "../shapes/ThrottledException";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const TagResources: _Operation_ = {
  metadata: ServiceMetadata,
  name: "TagResources",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: TagResourcesInput
  },
  output: {
    shape: TagResourcesOutput
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
