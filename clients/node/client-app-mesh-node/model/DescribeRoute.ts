import { DescribeRouteInput } from "./DescribeRouteInput";
import { DescribeRouteOutput } from "./DescribeRouteOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
