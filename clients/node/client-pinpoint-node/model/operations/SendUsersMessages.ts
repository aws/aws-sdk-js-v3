import { SendUsersMessagesInput } from "../shapes/SendUsersMessagesInput";
import { SendUsersMessagesOutput } from "../shapes/SendUsersMessagesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendUsersMessages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendUsersMessages",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/users-messages"
  },
  input: {
    shape: SendUsersMessagesInput
  },
  output: {
    shape: SendUsersMessagesOutput
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
