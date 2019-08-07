import { GetChannelsInput } from "./GetChannelsInput";
import { GetChannelsOutput } from "./GetChannelsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
