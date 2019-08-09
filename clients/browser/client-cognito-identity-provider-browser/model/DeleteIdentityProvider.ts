import { DeleteIdentityProviderInput } from "./DeleteIdentityProviderInput";
import { DeleteIdentityProviderOutput } from "./DeleteIdentityProviderOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedIdentityProviderException } from "./UnsupportedIdentityProviderException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteIdentityProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteIdentityProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteIdentityProviderInput
  },
  output: {
    shape: DeleteIdentityProviderOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: UnsupportedIdentityProviderException
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
