import { DescribeEndpointsInput } from "../shapes/DescribeEndpointsInput";
import { DescribeEndpointsOutput } from "../shapes/DescribeEndpointsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeEndpoints: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeEndpoints",
  http: {
    method: "POST",
    requestUri: "/2017-08-29/endpoints"
  },
  input: {
    shape: DescribeEndpointsInput
  },
  output: {
    shape: DescribeEndpointsOutput
  },
  errors: [
    {
      shape: BadRequestException
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
      shape: TooManyRequestsException
    },
    {
      shape: ConflictException
    }
  ]
};
