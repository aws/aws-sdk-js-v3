import { GetEmailChannelInput } from "../shapes/GetEmailChannelInput";
import { GetEmailChannelOutput } from "../shapes/GetEmailChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetEmailChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetEmailChannel",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/channels/email"
  },
  input: {
    shape: GetEmailChannelInput
  },
  output: {
    shape: GetEmailChannelOutput
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
