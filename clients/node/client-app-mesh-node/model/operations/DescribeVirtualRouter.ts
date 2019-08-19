import { DescribeVirtualRouterInput } from "../shapes/DescribeVirtualRouterInput";
import { DescribeVirtualRouterOutput } from "../shapes/DescribeVirtualRouterOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVirtualRouter: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVirtualRouter",
  http: {
    method: "GET",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}"
  },
  input: {
    shape: DescribeVirtualRouterInput
  },
  output: {
    shape: DescribeVirtualRouterOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: InternalServerErrorException
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
