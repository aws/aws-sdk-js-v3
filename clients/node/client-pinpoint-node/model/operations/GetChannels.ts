import { GetChannelsInput } from "../shapes/GetChannelsInput";
import { GetChannelsOutput } from "../shapes/GetChannelsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetChannels: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetChannels",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels"
  },
  input: {
    shape: GetChannelsInput
  },
  output: {
    shape: GetChannelsOutput
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
