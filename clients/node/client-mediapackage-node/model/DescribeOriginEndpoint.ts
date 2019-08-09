import { DescribeOriginEndpointInput } from "./DescribeOriginEndpointInput";
import { DescribeOriginEndpointOutput } from "./DescribeOriginEndpointOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
