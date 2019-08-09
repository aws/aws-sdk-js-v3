import { RestoreDomainAccessInput } from "./RestoreDomainAccessInput";
import { RestoreDomainAccessOutput } from "./RestoreDomainAccessOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RestoreDomainAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RestoreDomainAccess",
  http: {
    method: "POST",
    requestUri: "/restoreDomainAccess"
  },
  input: {
    shape: RestoreDomainAccessInput
  },
  output: {
    shape: RestoreDomainAccessOutput
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
