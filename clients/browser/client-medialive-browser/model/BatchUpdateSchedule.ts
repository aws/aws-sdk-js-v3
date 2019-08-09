import { BatchUpdateScheduleInput } from "./BatchUpdateScheduleInput";
import { BatchUpdateScheduleOutput } from "./BatchUpdateScheduleOutput";
import { BadRequestException } from "./BadRequestException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
