import { GetApplicationSettingsInput } from "../shapes/GetApplicationSettingsInput";
import { GetApplicationSettingsOutput } from "../shapes/GetApplicationSettingsOutput";
import { BadRequestException } from "../shapes/BadRequestException";
import { InternalServerErrorException } from "../shapes/InternalServerErrorException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { NotFoundException } from "../shapes/NotFoundException";
import { MethodNotAllowedException } from "../shapes/MethodNotAllowedException";
import { TooManyRequestsException } from "../shapes/TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetApplicationSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetApplicationSettings",
  http: {
    method: "GET",
    requestUri: "/v1/apps/{application-id}/settings"
  },
  input: {
    shape: GetApplicationSettingsInput
  },
  output: {
    shape: GetApplicationSettingsOutput
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
