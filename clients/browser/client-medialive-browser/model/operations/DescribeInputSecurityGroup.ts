import { DescribeInputSecurityGroupInput } from "../shapes/DescribeInputSecurityGroupInput";
import { DescribeInputSecurityGroupOutput } from "../shapes/DescribeInputSecurityGroupOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DescribeInputSecurityGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeInputSecurityGroup",
  http: {
    method: "GET",
    requestUri: "/prod/inputSecurityGroups/{inputSecurityGroupId}"
  },
  input: {
    shape: DescribeInputSecurityGroupInput
  },
  output: {
    shape: DescribeInputSecurityGroupOutput
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
      shape: BadGatewayException
    },
    {
      shape: NotFoundException
    },
    {
      shape: GatewayTimeoutException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
