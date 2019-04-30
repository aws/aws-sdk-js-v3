import { SendUsersMessagesInput } from "./SendUsersMessagesInput";
import { SendUsersMessagesOutput } from "./SendUsersMessagesOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
