import { DisassociateWebsiteAuthorizationProviderInput } from "./DisassociateWebsiteAuthorizationProviderInput";
import { DisassociateWebsiteAuthorizationProviderOutput } from "./DisassociateWebsiteAuthorizationProviderOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
