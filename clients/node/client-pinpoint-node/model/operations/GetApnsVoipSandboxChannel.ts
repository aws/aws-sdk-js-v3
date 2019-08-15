import { GetApnsVoipSandboxChannelInput } from "../shapes/GetApnsVoipSandboxChannelInput";
import { GetApnsVoipSandboxChannelOutput } from "../shapes/GetApnsVoipSandboxChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApnsVoipSandboxChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApnsVoipSandboxChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/apns_voip_sandbox"
  },
  input: {
    shape: GetApnsVoipSandboxChannelInput
  },
  output: {
    shape: GetApnsVoipSandboxChannelOutput
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
