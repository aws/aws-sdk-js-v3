import { GetEmailChannelInput } from "./GetEmailChannelInput";
import { GetEmailChannelOutput } from "./GetEmailChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
