import { UpdateGcmChannelInput } from "./UpdateGcmChannelInput";
import { UpdateGcmChannelOutput } from "./UpdateGcmChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateGcmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGcmChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/gcm"
  },
  input: {
    shape: UpdateGcmChannelInput
  },
  output: {
    shape: UpdateGcmChannelOutput
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
