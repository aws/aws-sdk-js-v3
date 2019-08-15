import { CreateIdentityProviderInput } from "../shapes/CreateIdentityProviderInput";
import { CreateIdentityProviderOutput } from "../shapes/CreateIdentityProviderOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { DuplicateProviderException } from "../shapes/DuplicateProviderException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const CreateIdentityProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateIdentityProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CreateIdentityProviderInput
  },
  output: {
    shape: CreateIdentityProviderOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: DuplicateProviderException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: NotAuthorizedException
    },
    {
      shape: TooManyRequestsException
    },
    {
      shape: LimitExceededException
    },
    {
      shape: InternalErrorException
    }
  ]
};
