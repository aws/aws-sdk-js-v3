import { UpdateAccountSettingsInput } from "../shapes/UpdateAccountSettingsInput";
import { UpdateAccountSettingsOutput } from "../shapes/UpdateAccountSettingsOutput";
import { UnauthorizedClientException } from "../shapes/UnauthorizedClientException";
import { NotFoundException } from "../shapes/NotFoundException";
import { BadRequestException } from "../shapes/BadRequestException";
import { ForbiddenException } from "../shapes/ForbiddenException";
import { ConflictException } from "../shapes/ConflictException";
import { ThrottledClientException } from "../shapes/ThrottledClientException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { ServiceFailureException } from "../shapes/ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateAccountSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateAccountSettings",
  http: {
    method: "PUT",
    requestUri: "/accounts/{accountId}/settings"
  },
  input: {
    shape: UpdateAccountSettingsInput
  },
  output: {
    shape: UpdateAccountSettingsOutput
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
      shape: ConflictException
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
