import { UpdateVoiceChannelInput } from "../shapes/UpdateVoiceChannelInput";
import { UpdateVoiceChannelOutput } from "../shapes/UpdateVoiceChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
