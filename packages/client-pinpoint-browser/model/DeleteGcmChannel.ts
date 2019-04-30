import { DeleteGcmChannelInput } from "./DeleteGcmChannelInput";
import { DeleteGcmChannelOutput } from "./DeleteGcmChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
