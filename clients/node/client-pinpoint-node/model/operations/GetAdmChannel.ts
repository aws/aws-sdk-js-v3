import { GetAdmChannelInput } from "../shapes/GetAdmChannelInput";
import { GetAdmChannelOutput } from "../shapes/GetAdmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetAdmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAdmChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/adm"
  },
  input: {
    shape: GetAdmChannelInput
  },
  output: {
    shape: GetAdmChannelOutput
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
