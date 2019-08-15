import { BatchUpdateScheduleInput } from "../shapes/BatchUpdateScheduleInput";
import { BatchUpdateScheduleOutput } from "../shapes/BatchUpdateScheduleOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const BatchUpdateSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "BatchUpdateSchedule",
  http: {
    method: "PUT",
    requestUri: "/prod/channels/{channelId}/schedule"
  },
  input: {
    shape: BatchUpdateScheduleInput
  },
  output: {
    shape: BatchUpdateScheduleOutput
  },
  errors: [
    {
      shape: BadRequestException
    },
    {
      shape: UnprocessableEntityException
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
