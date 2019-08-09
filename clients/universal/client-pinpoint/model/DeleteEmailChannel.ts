import { DeleteEmailChannelInput } from "./DeleteEmailChannelInput";
import { DeleteEmailChannelOutput } from "./DeleteEmailChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
