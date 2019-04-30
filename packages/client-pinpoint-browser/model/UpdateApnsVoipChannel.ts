import { UpdateApnsVoipChannelInput } from "./UpdateApnsVoipChannelInput";
import { UpdateApnsVoipChannelOutput } from "./UpdateApnsVoipChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
