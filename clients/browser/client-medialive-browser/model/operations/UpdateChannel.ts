import { UpdateChannelInput } from "../shapes/UpdateChannelInput";
import { UpdateChannelOutput } from "../shapes/UpdateChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnprocessableEntityException } from "../shapes/UnprocessableEntityException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadGatewayException } from "../shapes/BadGatewayException";
import { GatewayTimeoutException } from "../shapes/GatewayTimeoutException";
import { ConflictException } from "../shapes/ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateChannel",
  http: {
    method: "PUT",
    requestUri: "/prod/channels/{channelId}"
  },
  input: {
    shape: UpdateChannelInput
  },
  output: {
    shape: UpdateChannelOutput
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
      shape: GatewayTimeoutException
    },
    {
      shape: ConflictException
    }
  ]
};
