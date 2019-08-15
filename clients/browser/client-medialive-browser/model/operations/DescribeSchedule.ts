import { DescribeScheduleInput } from "../shapes/DescribeScheduleInput";
import { DescribeScheduleOutput } from "../shapes/DescribeScheduleOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
