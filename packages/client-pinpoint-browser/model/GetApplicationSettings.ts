import { GetApplicationSettingsInput } from "./GetApplicationSettingsInput";
import { GetApplicationSettingsOutput } from "./GetApplicationSettingsOutput";
import { BadRequestException } from "./BadRequestException";
import { InternalServerErrorException } from "./InternalServerErrorException";
import { ForbiddenException } from "./ForbiddenException";
import { NotFoundException } from "./NotFoundException";
import { MethodNotAllowedException } from "./MethodNotAllowedException";
import { TooManyRequestsException } from "./TooManyRequestsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
