import { DeleteAdmChannelInput } from "./DeleteAdmChannelInput";
import { DeleteAdmChannelOutput } from "./DeleteAdmChannelOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteAdmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAdmChannel",
  http: {
    method: "DELETE",
    requestUri: "/v1/apps/{application-id}/channels/adm"
  },
  input: {
    shape: DeleteAdmChannelInput
  },
  output: {
    shape: DeleteAdmChannelOutput
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
