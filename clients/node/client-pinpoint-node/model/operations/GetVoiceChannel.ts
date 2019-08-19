import { GetVoiceChannelInput } from "../shapes/GetVoiceChannelInput";
import { GetVoiceChannelOutput } from "../shapes/GetVoiceChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
