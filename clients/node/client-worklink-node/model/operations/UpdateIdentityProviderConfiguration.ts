import { UpdateIdentityProviderConfigurationInput } from "../shapes/UpdateIdentityProviderConfigurationInput";
import { UpdateIdentityProviderConfigurationOutput } from "../shapes/UpdateIdentityProviderConfigurationOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
