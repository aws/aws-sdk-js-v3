import { UpdateMailboxQuotaInput } from "../shapes/UpdateMailboxQuotaInput";
import { UpdateMailboxQuotaOutput } from "../shapes/UpdateMailboxQuotaOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateMailboxQuota: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateMailboxQuota",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateMailboxQuotaInput
  },
  output: {
    shape: UpdateMailboxQuotaOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    },
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    }
  ]
};
