import { GetAccountSettingsInput } from "../shapes/GetAccountSettingsInput";
import { GetAccountSettingsOutput } from "../shapes/GetAccountSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
