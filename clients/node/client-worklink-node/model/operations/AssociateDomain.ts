import { AssociateDomainInput } from "../shapes/AssociateDomainInput";
import { AssociateDomainOutput } from "../shapes/AssociateDomainOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "../shapes/ResourceAlreadyExistsException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDomain",
  http: {
    method: "POST",
    requestUri: "/associateDomain"
  },
  input: {
    shape: AssociateDomainInput
  },
  output: {
    shape: AssociateDomainOutput
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
