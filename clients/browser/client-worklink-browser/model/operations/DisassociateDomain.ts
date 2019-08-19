import { DisassociateDomainInput } from "../shapes/DisassociateDomainInput";
import { DisassociateDomainOutput } from "../shapes/DisassociateDomainOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
