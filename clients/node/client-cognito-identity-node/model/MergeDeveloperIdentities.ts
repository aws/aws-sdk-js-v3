import { MergeDeveloperIdentitiesInput } from "./MergeDeveloperIdentitiesInput";
import { MergeDeveloperIdentitiesOutput } from "./MergeDeveloperIdentitiesOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { ResourceConflictException } from "./ResourceConflictException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const MergeDeveloperIdentities: _Operation_ = {
  metadata: ServiceMetadata,
  name: "MergeDeveloperIdentities",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: MergeDeveloperIdentitiesInput
  },
  output: {
    shape: MergeDeveloperIdentitiesOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: ResourceConflictException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
