import { ListIdentityProvidersInput } from "../shapes/ListIdentityProvidersInput";
import { ListIdentityProvidersOutput } from "../shapes/ListIdentityProvidersOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListIdentityProviders: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListIdentityProviders",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListIdentityProvidersInput
  },
  output: {
    shape: ListIdentityProvidersOutput
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
      shape: TooManyRequestsException
    },
    {
      shape: InternalErrorException
    }
  ]
};
