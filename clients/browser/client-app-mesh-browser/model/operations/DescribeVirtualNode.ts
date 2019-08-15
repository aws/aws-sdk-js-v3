import { DescribeVirtualNodeInput } from "../shapes/DescribeVirtualNodeInput";
import { DescribeVirtualNodeOutput } from "../shapes/DescribeVirtualNodeOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeVirtualNode: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeVirtualNode",
  http: {
    method: "GET",
    requestUri: "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}"
  },
  input: {
    shape: DescribeVirtualNodeInput
  },
  output: {
    shape: DescribeVirtualNodeOutput
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
