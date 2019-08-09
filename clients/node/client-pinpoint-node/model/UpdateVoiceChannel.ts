import { UpdateVoiceChannelInput } from "./UpdateVoiceChannelInput";
import { UpdateVoiceChannelOutput } from "./UpdateVoiceChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateVoiceChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateVoiceChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/voice"
  },
  input: {
    shape: UpdateVoiceChannelInput
  },
  output: {
    shape: UpdateVoiceChannelOutput
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
      shape: NotFoundException
    },
    {
      shape: MethodNotAllowedException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
