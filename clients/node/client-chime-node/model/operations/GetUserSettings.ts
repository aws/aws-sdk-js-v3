import { GetUserSettingsInput } from "../shapes/GetUserSettingsInput";
import { GetUserSettingsOutput } from "../shapes/GetUserSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
