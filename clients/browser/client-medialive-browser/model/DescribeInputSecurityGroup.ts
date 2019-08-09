import { DescribeInputSecurityGroupInput } from "./DescribeInputSecurityGroupInput";
import { DescribeInputSecurityGroupOutput } from "./DescribeInputSecurityGroupOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
