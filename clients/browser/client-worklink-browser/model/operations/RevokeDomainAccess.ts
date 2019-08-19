import { RevokeDomainAccessInput } from "../shapes/RevokeDomainAccessInput";
import { RevokeDomainAccessOutput } from "../shapes/RevokeDomainAccessOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RevokeDomainAccess: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RevokeDomainAccess",
  http: {
    method: "POST",
    requestUri: "/revokeDomainAccess"
  },
  input: {
    shape: RevokeDomainAccessInput
  },
  output: {
    shape: RevokeDomainAccessOutput
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
