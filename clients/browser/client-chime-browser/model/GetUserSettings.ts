import { GetUserSettingsInput } from "./GetUserSettingsInput";
import { GetUserSettingsOutput } from "./GetUserSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetUserSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetUserSettings",
  http: {
    method: "GET",
    requestUri: "/accounts/{accountId}/users/{userId}/settings"
  },
  input: {
    shape: GetUserSettingsInput
  },
  output: {
    shape: GetUserSettingsOutput
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
