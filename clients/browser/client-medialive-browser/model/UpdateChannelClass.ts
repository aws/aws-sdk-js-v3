import { UpdateChannelClassInput } from "./UpdateChannelClassInput";
import { UpdateChannelClassOutput } from "./UpdateChannelClassOutput";
import { BadRequestException } from "./BadRequestException";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { BadGatewayException } from "./BadGatewayException";
import { NotFoundException } from "./NotFoundException";
import { GatewayTimeoutException } from "./GatewayTimeoutException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { ConflictException } from "./ConflictException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
