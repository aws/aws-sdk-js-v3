import { RestoreDomainAccessInput } from "../shapes/RestoreDomainAccessInput";
import { RestoreDomainAccessOutput } from "../shapes/RestoreDomainAccessOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
