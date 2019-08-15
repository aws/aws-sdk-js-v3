import { UpdateGlobalSettingsInput } from "../shapes/UpdateGlobalSettingsInput";
import { UpdateGlobalSettingsOutput } from "../shapes/UpdateGlobalSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateGlobalSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateGlobalSettings",
  http: {
    method: "PUT",
    requestUri: "/settings"
  },
  input: {
    shape: UpdateGlobalSettingsInput
  },
  output: {
    shape: UpdateGlobalSettingsOutput
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
