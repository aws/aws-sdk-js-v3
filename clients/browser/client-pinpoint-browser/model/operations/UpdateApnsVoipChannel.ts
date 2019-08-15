import { UpdateApnsVoipChannelInput } from "../shapes/UpdateApnsVoipChannelInput";
import { UpdateApnsVoipChannelOutput } from "../shapes/UpdateApnsVoipChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApnsVoipChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApnsVoipChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/apns_voip"
  },
  input: {
    shape: UpdateApnsVoipChannelInput
  },
  output: {
    shape: UpdateApnsVoipChannelOutput
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
