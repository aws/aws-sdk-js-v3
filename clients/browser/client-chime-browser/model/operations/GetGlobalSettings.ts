import { GetGlobalSettingsInput } from "../shapes/GetGlobalSettingsInput";
import { GetGlobalSettingsOutput } from "../shapes/GetGlobalSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
