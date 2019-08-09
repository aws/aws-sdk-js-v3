import { DeleteVoiceChannelInput } from "./DeleteVoiceChannelInput";
import { DeleteVoiceChannelOutput } from "./DeleteVoiceChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteVoiceChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVoiceChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/voice"
  },
  input: {
    shape: DeleteVoiceChannelInput
  },
  output: {
    shape: DeleteVoiceChannelOutput
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
