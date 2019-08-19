import { DeleteSmsChannelInput } from "../shapes/DeleteSmsChannelInput";
import { DeleteSmsChannelOutput } from "../shapes/DeleteSmsChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteSmsChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteSmsChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/sms"
  },
  input: {
    shape: DeleteSmsChannelInput
  },
  output: {
    shape: DeleteSmsChannelOutput
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
