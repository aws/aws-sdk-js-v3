import { DescribeFlowInput } from "../shapes/DescribeFlowInput";
import { DescribeFlowOutput } from "../shapes/DescribeFlowOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeFlow: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeFlow",
  http: {
    method: "GET",
    requestUri: "/v1/flows/{flowArn}"
  },
  input: {
    shape: DescribeFlowInput
  },
  output: {
    shape: DescribeFlowOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: InternalServerErrorException
    },
    {
      shape: ForbiddenException
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
