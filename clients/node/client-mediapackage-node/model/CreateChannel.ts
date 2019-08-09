import { CreateChannelInput } from "./CreateChannelInput";
import { CreateChannelOutput } from "./CreateChannelOutput";
import { UnprocessableEntityException } from "./UnprocessableEntityException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateChannel",
  http: {
    method: "POST",
    requestUri: "/channels"
  },
  input: {
    shape: CreateChannelInput
  },
  output: {
    shape: CreateChannelOutput
  },
  errors: [
    {
      shape: UnprocessableEntityException
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
      shape: ServiceUnavailableException
    },
    {
      shape: TooManyRequestsException
    }
  ]
};
