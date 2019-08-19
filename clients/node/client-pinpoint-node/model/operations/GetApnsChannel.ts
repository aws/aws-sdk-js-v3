import { GetApnsChannelInput } from "../shapes/GetApnsChannelInput";
import { GetApnsChannelOutput } from "../shapes/GetApnsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApnsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApnsChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/apns"
  },
  input: {
    shape: GetApnsChannelInput
  },
  output: {
    shape: GetApnsChannelOutput
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
