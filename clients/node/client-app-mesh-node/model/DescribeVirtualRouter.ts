import { DescribeVirtualRouterInput } from "./DescribeVirtualRouterInput";
import { DescribeVirtualRouterOutput } from "./DescribeVirtualRouterOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
