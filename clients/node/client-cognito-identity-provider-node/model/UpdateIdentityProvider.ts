import { UpdateIdentityProviderInput } from "./UpdateIdentityProviderInput";
import { UpdateIdentityProviderOutput } from "./UpdateIdentityProviderOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { UnsupportedIdentityProviderException } from "./UnsupportedIdentityProviderException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { NotAuthorizedException } from "./NotAuthorizedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { InternalErrorException } from "./InternalErrorException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
