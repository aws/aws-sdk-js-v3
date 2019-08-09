import { TagResourcesInput } from "./TagResourcesInput";
import { TagResourcesOutput } from "./TagResourcesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ThrottledException } from "./ThrottledException";
import { InternalServiceException } from "./InternalServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
