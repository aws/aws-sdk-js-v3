import { RegenerateSecurityTokenInput } from "../shapes/RegenerateSecurityTokenInput";
import { RegenerateSecurityTokenOutput } from "../shapes/RegenerateSecurityTokenOutput";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { BadRequestException } from "../shapes/BadRequestException";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
