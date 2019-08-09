import { AssociateDomainInput } from "./AssociateDomainInput";
import { AssociateDomainOutput } from "./AssociateDomainOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { ResourceAlreadyExistsException } from "./ResourceAlreadyExistsException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
