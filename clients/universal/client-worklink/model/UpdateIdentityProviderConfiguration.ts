import { UpdateIdentityProviderConfigurationInput } from "./UpdateIdentityProviderConfigurationInput";
import { UpdateIdentityProviderConfigurationOutput } from "./UpdateIdentityProviderConfigurationOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateIdentityProviderConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateIdentityProviderConfiguration",
  http: {
    method: "POST",
    requestUri: "/updateIdentityProviderConfiguration"
  },
  input: {
    shape: UpdateIdentityProviderConfigurationInput
  },
  output: {
    shape: UpdateIdentityProviderConfigurationOutput
  },
  errors: [
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: InvalidRequestException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
