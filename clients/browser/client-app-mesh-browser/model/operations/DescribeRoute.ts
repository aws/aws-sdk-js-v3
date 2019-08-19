import { DescribeRouteInput } from "../shapes/DescribeRouteInput";
import { DescribeRouteOutput } from "../shapes/DescribeRouteOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeRoute: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeRoute",
  http: {
    method: "GET",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}"
  },
  input: {
    shape: DescribeRouteInput
  },
  output: {
    shape: DescribeRouteOutput
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
