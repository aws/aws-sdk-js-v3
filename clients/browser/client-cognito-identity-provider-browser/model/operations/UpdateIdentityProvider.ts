import { UpdateIdentityProviderInput } from "../shapes/UpdateIdentityProviderInput";
import { UpdateIdentityProviderOutput } from "../shapes/UpdateIdentityProviderOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { UnsupportedIdentityProviderException } from "../shapes/UnsupportedIdentityProviderException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { NotAuthorizedException } from "../shapes/NotAuthorizedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { InternalErrorException } from "../shapes/InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateIdentityProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIdentityProvider",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateIdentityProviderInput
  },
  output: {
    shape: UpdateIdentityProviderOutput
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
