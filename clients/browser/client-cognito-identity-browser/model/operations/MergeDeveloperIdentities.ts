import { MergeDeveloperIdentitiesInput } from "../shapes/MergeDeveloperIdentitiesInput";
import { MergeDeveloperIdentitiesOutput } from "../shapes/MergeDeveloperIdentitiesOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
