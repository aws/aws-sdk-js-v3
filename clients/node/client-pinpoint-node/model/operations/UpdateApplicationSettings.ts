import { UpdateApplicationSettingsInput } from "../shapes/UpdateApplicationSettingsInput";
import { UpdateApplicationSettingsOutput } from "../shapes/UpdateApplicationSettingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
