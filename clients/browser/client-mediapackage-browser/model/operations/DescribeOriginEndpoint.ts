import { DescribeOriginEndpointInput } from "../shapes/DescribeOriginEndpointInput";
import { DescribeOriginEndpointOutput } from "../shapes/DescribeOriginEndpointOutput";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeOriginEndpoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeOriginEndpoint",
  http: {
    method: "GET",
    requestUri: "/origin_endpoints/{id}"
  },
  input: {
    shape: DescribeOriginEndpointInput
  },
  output: {
    shape: DescribeOriginEndpointOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
