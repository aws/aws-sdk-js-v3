import { DescribeScheduleInput } from "./DescribeScheduleInput";
import { DescribeScheduleOutput } from "./DescribeScheduleOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DescribeSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DescribeSchedule",
  http: {
    method: "GET",
    requestUri: "/prod/channels/{channelId}/schedule"
  },
  input: {
    shape: DescribeScheduleInput
  },
  output: {
    shape: DescribeScheduleOutput
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
