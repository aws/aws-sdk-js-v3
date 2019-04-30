import { UpdateApplicationSettingsInput } from "./UpdateApplicationSettingsInput";
import { UpdateApplicationSettingsOutput } from "./UpdateApplicationSettingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateApplicationSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateApplicationSettings",
  http: {
    method: "PUT",
    requestUri: "/v1/apps/{application-id}/settings"
  },
  input: {
    shape: UpdateApplicationSettingsInput
  },
  output: {
    shape: UpdateApplicationSettingsOutput
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
