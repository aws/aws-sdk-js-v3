import { DeleteApnsVoipSandboxChannelInput } from "./DeleteApnsVoipSandboxChannelInput";
import { DeleteApnsVoipSandboxChannelOutput } from "./DeleteApnsVoipSandboxChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteApnsVoipSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApnsVoipSandboxChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/apns_voip_sandbox"
  },
  input: {
    shape: DeleteApnsVoipSandboxChannelInput
  },
  output: {
    shape: DeleteApnsVoipSandboxChannelOutput
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
