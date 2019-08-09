import { ListIdentityProvidersInput } from "./ListIdentityProvidersInput";
import { ListIdentityProvidersOutput } from "./ListIdentityProvidersOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
