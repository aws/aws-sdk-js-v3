import { DescribeClusterOperationInput } from "../shapes/DescribeClusterOperationInput";
import { DescribeClusterOperationOutput } from "../shapes/DescribeClusterOperationOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeClusterOperation: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeClusterOperation",
  http: {
    method: "GET",
    requestUri: "/v1/operations/{clusterOperationArn}"
  },
  input: {
    shape: DescribeClusterOperationInput
  },
  output: {
    shape: DescribeClusterOperationOutput
  },
  errors: [
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
    }
  ]
};
