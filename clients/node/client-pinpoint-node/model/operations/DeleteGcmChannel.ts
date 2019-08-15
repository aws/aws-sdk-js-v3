import { DeleteGcmChannelInput } from "../shapes/DeleteGcmChannelInput";
import { DeleteGcmChannelOutput } from "../shapes/DeleteGcmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteGcmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteGcmChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/gcm"
  },
  input: {
    shape: DeleteGcmChannelInput
  },
  output: {
    shape: DeleteGcmChannelOutput
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
