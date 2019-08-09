import { GetVoiceChannelInput } from "./GetVoiceChannelInput";
import { GetVoiceChannelOutput } from "./GetVoiceChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVoiceChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVoiceChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/voice"
  },
  input: {
    shape: GetVoiceChannelInput
  },
  output: {
    shape: GetVoiceChannelOutput
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
