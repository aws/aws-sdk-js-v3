import { UpdateEmailChannelInput } from "../shapes/UpdateEmailChannelInput";
import { UpdateEmailChannelOutput } from "../shapes/UpdateEmailChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
