import { GetGcmChannelInput } from "../shapes/GetGcmChannelInput";
import { GetGcmChannelOutput } from "../shapes/GetGcmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetGcmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGcmChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/gcm"
  },
  input: {
    shape: GetGcmChannelInput
  },
  output: {
    shape: GetGcmChannelOutput
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
