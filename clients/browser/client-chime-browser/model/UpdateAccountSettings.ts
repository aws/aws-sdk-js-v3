import { UpdateAccountSettingsInput } from "./UpdateAccountSettingsInput";
import { UpdateAccountSettingsOutput } from "./UpdateAccountSettingsOutput";
import { UnauthorizedClientException } from "./UnauthorizedClientException";
import { NotFoundException } from "./NotFoundException";
import { BadRequestException } from "./BadRequestException";
import { ForbiddenException } from "./ForbiddenException";
import { ConflictException } from "./ConflictException";
import { ThrottledClientException } from "./ThrottledClientException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { ServiceFailureException } from "./ServiceFailureException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
