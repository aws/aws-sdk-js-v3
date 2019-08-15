import { DeleteApnsChannelInput } from "../shapes/DeleteApnsChannelInput";
import { DeleteApnsChannelOutput } from "../shapes/DeleteApnsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteApnsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteApnsChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/apns"
  },
  input: {
    shape: DeleteApnsChannelInput
  },
  output: {
    shape: DeleteApnsChannelOutput
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
