import { UpdateAdmChannelInput } from "../shapes/UpdateAdmChannelInput";
import { UpdateAdmChannelOutput } from "../shapes/UpdateAdmChannelOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAdmChannel: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAdmChannel",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/channels/adm"
  },
  input: {
    shape: UpdateAdmChannelInput
  },
  output: {
    shape: UpdateAdmChannelOutput
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
