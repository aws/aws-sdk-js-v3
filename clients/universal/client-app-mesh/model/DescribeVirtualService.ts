import { DescribeVirtualServiceInput } from "./DescribeVirtualServiceInput";
import { DescribeVirtualServiceOutput } from "./DescribeVirtualServiceOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
