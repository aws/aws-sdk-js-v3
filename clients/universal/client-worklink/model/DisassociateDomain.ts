import { DisassociateDomainInput } from "./DisassociateDomainInput";
import { DisassociateDomainOutput } from "./DisassociateDomainOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DisassociateDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDomain",
  http: {
    method: "POST",
    requestUri: "/disassociateDomain"
  },
  input: {
    shape: DisassociateDomainInput
  },
  output: {
    shape: DisassociateDomainOutput
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
