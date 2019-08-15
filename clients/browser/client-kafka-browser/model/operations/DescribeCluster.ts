import { DescribeClusterInput } from "../shapes/DescribeClusterInput";
import { DescribeClusterOutput } from "../shapes/DescribeClusterOutput";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedException } from "../shapes/UnauthorizedException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeCluster: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeCluster",
  http: {
    method: "GET",
    requestUri: "/v1/clusters/{clusterArn}"
  },
  input: {
    shape: DescribeClusterInput
  },
  output: {
    shape: DescribeClusterOutput
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
