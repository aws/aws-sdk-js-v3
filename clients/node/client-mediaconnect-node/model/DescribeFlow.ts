import { DescribeFlowInput } from "./DescribeFlowInput";
import { DescribeFlowOutput } from "./DescribeFlowOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
