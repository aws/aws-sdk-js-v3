import { DescribeVirtualNodeInput } from "./DescribeVirtualNodeInput";
import { DescribeVirtualNodeOutput } from "./DescribeVirtualNodeOutput";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
