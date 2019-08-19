import { DeleteEmailChannelInput } from "../shapes/DeleteEmailChannelInput";
import { DeleteEmailChannelOutput } from "../shapes/DeleteEmailChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteEmailChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteEmailChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/email"
  },
  input: {
    shape: DeleteEmailChannelInput
  },
  output: {
    shape: DeleteEmailChannelOutput
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
