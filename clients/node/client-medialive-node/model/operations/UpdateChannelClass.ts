import { UpdateChannelClassInput } from "../shapes/UpdateChannelClassInput";
import { UpdateChannelClassOutput } from "../shapes/UpdateChannelClassOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { NotFoundException } from "../shapes/NotFoundException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateChannelClass: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateChannelClass",
  http: {
    method: "PUT",
    requestUri: "/prod/channels/{channelId}/channelClass"
  },
  input: {
    shape: UpdateChannelClassInput
  },
  output: {
    shape: UpdateChannelClassOutput
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
    },
    {
      shape: ConflictException
    }
  ]
};
