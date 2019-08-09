import { UpdateChannelInput } from "./UpdateChannelInput";
import { UpdateChannelOutput } from "./UpdateChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
