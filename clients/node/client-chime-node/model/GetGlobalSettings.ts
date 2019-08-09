import { GetGlobalSettingsInput } from "./GetGlobalSettingsInput";
import { GetGlobalSettingsOutput } from "./GetGlobalSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetGlobalSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetGlobalSettings",
  http: {
    method: "GET",
    requestUri: "/settings"
  },
  input: {
    shape: GetGlobalSettingsInput
  },
  output: {
    shape: GetGlobalSettingsOutput
  },
  errors: [
    {
      shape: UnauthorizedClientException
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
