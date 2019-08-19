import { DisassociateWebsiteAuthorizationProviderInput } from "../shapes/DisassociateWebsiteAuthorizationProviderInput";
import { DisassociateWebsiteAuthorizationProviderOutput } from "../shapes/DisassociateWebsiteAuthorizationProviderOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateWebsiteAuthorizationProvider: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateWebsiteAuthorizationProvider",
  http: {
    method: "POST",
    requestUri: "/disassociateWebsiteAuthorizationProvider"
  },
  input: {
    shape: DisassociateWebsiteAuthorizationProviderInput
  },
  output: {
    shape: DisassociateWebsiteAuthorizationProviderOutput
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
