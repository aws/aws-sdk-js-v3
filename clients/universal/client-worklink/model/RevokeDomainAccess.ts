import { RevokeDomainAccessInput } from "./RevokeDomainAccessInput";
import { RevokeDomainAccessOutput } from "./RevokeDomainAccessOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
