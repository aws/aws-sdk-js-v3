import { DescribeClusterOperationInput } from "./DescribeClusterOperationInput";
import { DescribeClusterOperationOutput } from "./DescribeClusterOperationOutput";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedException } from "./UnauthorizedException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
