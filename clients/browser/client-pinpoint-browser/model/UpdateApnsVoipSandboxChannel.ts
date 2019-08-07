import { UpdateApnsVoipSandboxChannelInput } from "./UpdateApnsVoipSandboxChannelInput";
import { UpdateApnsVoipSandboxChannelOutput } from "./UpdateApnsVoipSandboxChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApnsVoipSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApnsVoipSandboxChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/apns_voip_sandbox"
  },
  input: {
    shape: UpdateApnsVoipSandboxChannelInput
  },
  output: {
    shape: UpdateApnsVoipSandboxChannelOutput
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
