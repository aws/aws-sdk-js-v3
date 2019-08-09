import { GetAccountSettingsInput } from "./GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "./GetAccountSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetAccountSettings",
  http: {
    method: "GET",
    requestUri: "/accounts/{accountId}/settings"
  },
  input: {
    shape: GetAccountSettingsInput
  },
  output: {
    shape: GetAccountSettingsOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    },
    {
      shape: BadRequestException
    },
    {
      shape: ForbiddenException
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
