import { GetSmsChannelInput } from "../shapes/GetSmsChannelInput";
import { GetSmsChannelOutput } from "../shapes/GetSmsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetSmsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetSmsChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/sms"
  },
  input: {
    shape: GetSmsChannelInput
  },
  output: {
    shape: GetSmsChannelOutput
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
