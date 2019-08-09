import { RegenerateSecurityTokenInput } from "./RegenerateSecurityTokenInput";
import { RegenerateSecurityTokenOutput } from "./RegenerateSecurityTokenOutput";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { ForbiddenException } from "./ForbiddenException";
import { BadRequestException } from "./BadRequestException";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RegenerateSecurityToken: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RegenerateSecurityToken",
  http: {
    method: "POST",
    requestUri:
      "/accounts/{accountId}/bots/{botId}?operation=regenerate-security-token"
  },
  input: {
    shape: RegenerateSecurityTokenInput
  },
  output: {
    shape: RegenerateSecurityTokenOutput
  },
  errors: [
    {
      shape: ServiceUnavailableException
    },
    {
      shape: ServiceFailureException
    },
    {
      shape: ForbiddenException
    },
    {
      shape: BadRequestException
    },
    {
      shape: UnauthorizedClientException
    },
    {
      shape: NotFoundException
    }
  ]
};
