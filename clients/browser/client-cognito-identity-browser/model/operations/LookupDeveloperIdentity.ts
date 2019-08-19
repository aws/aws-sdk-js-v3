import { LookupDeveloperIdentityInput } from "../shapes/LookupDeveloperIdentityInput";
import { LookupDeveloperIdentityOutput } from "../shapes/LookupDeveloperIdentityOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { ResourceConflictException } from "../shapes/ResourceConflictException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const LookupDeveloperIdentity: _Operation_ = {
  metadata: ServiceMetadata,
  name: "LookupDeveloperIdentity",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: LookupDeveloperIdentityInput
  },
  output: {
    shape: LookupDeveloperIdentityOutput
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
