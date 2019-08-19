import { SendMessagesInput } from "../shapes/SendMessagesInput";
import { SendMessagesOutput } from "../shapes/SendMessagesOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SendMessages: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SendMessages",
  http: {
    method: "POST",
    requestUri: "/v1/apps/{application-id}/messages"
  },
  input: {
    shape: SendMessagesInput
  },
  output: {
    shape: SendMessagesOutput
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
