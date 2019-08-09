import { AssociateWebsiteAuthorizationProviderInput } from "./AssociateWebsiteAuthorizationProviderInput";
import { AssociateWebsiteAuthorizationProviderOutput } from "./AssociateWebsiteAuthorizationProviderOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
