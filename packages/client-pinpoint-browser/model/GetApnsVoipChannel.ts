import { GetApnsVoipChannelInput } from "./GetApnsVoipChannelInput";
import { GetApnsVoipChannelOutput } from "./GetApnsVoipChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetApnsVoipChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApnsVoipChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/apns_voip"
  },
  input: {
    shape: GetApnsVoipChannelInput
  },
  output: {
    shape: GetApnsVoipChannelOutput
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
