import { DescribeDomainInput } from "../shapes/DescribeDomainInput";
import { DescribeDomainOutput } from "../shapes/DescribeDomainOutput";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeDomain: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeDomain",
  http: {
    method: "POST",
    requestUri: "/describeDomain"
  },
  input: {
    shape: DescribeDomainInput
  },
  output: {
    shape: DescribeDomainOutput
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
