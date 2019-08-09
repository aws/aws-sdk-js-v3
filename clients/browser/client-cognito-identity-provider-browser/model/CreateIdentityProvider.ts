import { CreateIdentityProviderInput } from "./CreateIdentityProviderInput";
import { CreateIdentityProviderOutput } from "./CreateIdentityProviderOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { DuplicateProviderException } from "./DuplicateProviderException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { LimitExceededException } from "./LimitExceededException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
