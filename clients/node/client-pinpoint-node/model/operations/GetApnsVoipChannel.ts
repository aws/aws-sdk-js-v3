import { GetApnsVoipChannelInput } from "../shapes/GetApnsVoipChannelInput";
import { GetApnsVoipChannelOutput } from "../shapes/GetApnsVoipChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
