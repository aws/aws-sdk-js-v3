import { DeleteIdentityProviderInput } from "../shapes/DeleteIdentityProviderInput";
import { DeleteIdentityProviderOutput } from "../shapes/DeleteIdentityProviderOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedIdentityProviderException } from "../shapes/UnsupportedIdentityProviderException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
