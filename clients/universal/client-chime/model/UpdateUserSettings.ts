import { UpdateUserSettingsInput } from "./UpdateUserSettingsInput";
import { UpdateUserSettingsOutput } from "./UpdateUserSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
