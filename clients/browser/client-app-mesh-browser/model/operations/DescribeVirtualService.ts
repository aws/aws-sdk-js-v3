import { DescribeVirtualServiceInput } from "../shapes/DescribeVirtualServiceInput";
import { DescribeVirtualServiceOutput } from "../shapes/DescribeVirtualServiceOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVirtualService: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVirtualService",
  http: {
    method: "GET",
    requestUri:
      "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}"
  },
  input: {
    shape: DescribeVirtualServiceInput
  },
  output: {
    shape: DescribeVirtualServiceOutput
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
