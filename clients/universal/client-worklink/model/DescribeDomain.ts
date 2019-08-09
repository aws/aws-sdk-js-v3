import { DescribeDomainInput } from "./DescribeDomainInput";
import { DescribeDomainOutput } from "./DescribeDomainOutput";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { InvalidRequestException } from "./InvalidRequestException";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
