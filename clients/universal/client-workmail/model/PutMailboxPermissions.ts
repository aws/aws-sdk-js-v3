import { PutMailboxPermissionsInput } from "./PutMailboxPermissionsInput";
import { PutMailboxPermissionsOutput } from "./PutMailboxPermissionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const PutMailboxPermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutMailboxPermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutMailboxPermissionsInput
  },
  output: {
    shape: PutMailboxPermissionsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
    },
    {
      shape: EntityStateException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: OrganizationNotFoundException
    },
    {
      shape: OrganizationStateException
    }
  ]
};
