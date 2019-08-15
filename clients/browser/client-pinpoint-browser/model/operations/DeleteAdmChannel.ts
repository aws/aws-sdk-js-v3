import { DeleteAdmChannelInput } from "../shapes/DeleteAdmChannelInput";
import { DeleteAdmChannelOutput } from "../shapes/DeleteAdmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
