import { UpdateMailboxQuotaInput } from "./UpdateMailboxQuotaInput";
import { UpdateMailboxQuotaOutput } from "./UpdateMailboxQuotaOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
