import { UpdateUserSettingsInput } from "../shapes/UpdateUserSettingsInput";
import { UpdateUserSettingsOutput } from "../shapes/UpdateUserSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateUserSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateUserSettings",
  http: {
    method: "PUT",
    requestUri: "/accounts/{accountId}/users/{userId}/settings"
  },
  input: {
    shape: UpdateUserSettingsInput
  },
  output: {
    shape: UpdateUserSettingsOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ThrottledClientException
    },
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    }
  ]
};
