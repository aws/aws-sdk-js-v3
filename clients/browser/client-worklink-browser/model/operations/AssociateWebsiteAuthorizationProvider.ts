import { AssociateWebsiteAuthorizationProviderInput } from "../shapes/AssociateWebsiteAuthorizationProviderInput";
import { AssociateWebsiteAuthorizationProviderOutput } from "../shapes/AssociateWebsiteAuthorizationProviderOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateWebsiteAuthorizationProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateWebsiteAuthorizationProvider",
  http: {
    method: "POST",
    requestUri: "/associateWebsiteAuthorizationProvider"
  },
  input: {
    shape: AssociateWebsiteAuthorizationProviderInput
  },
  output: {
    shape: AssociateWebsiteAuthorizationProviderOutput
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
      shape: ResourceAlreadyExistsException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
