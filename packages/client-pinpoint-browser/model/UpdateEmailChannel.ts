import { UpdateEmailChannelInput } from "./UpdateEmailChannelInput";
import { UpdateEmailChannelOutput } from "./UpdateEmailChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateEmailChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateEmailChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/email"
  },
  input: {
    shape: UpdateEmailChannelInput
  },
  output: {
    shape: UpdateEmailChannelOutput
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
