import { DeleteScheduleInput } from "./DeleteScheduleInput";
import { DeleteScheduleOutput } from "./DeleteScheduleOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteSchedule: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSchedule",
  http: {
    method: "DELETE",
    requestUri: "/prod/channels/{channelId}/schedule"
  },
  input: {
    shape: DeleteScheduleInput
  },
  output: {
    shape: DeleteScheduleOutput
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
