import { UpdateApnsChannelInput } from "../shapes/UpdateApnsChannelInput";
import { UpdateApnsChannelOutput } from "../shapes/UpdateApnsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateApnsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApnsChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/apns"
  },
  input: {
    shape: UpdateApnsChannelInput
  },
  output: {
    shape: UpdateApnsChannelOutput
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
