import { UpdateGlobalSettingsInput } from "./UpdateGlobalSettingsInput";
import { UpdateGlobalSettingsOutput } from "./UpdateGlobalSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
