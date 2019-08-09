import { DeleteMailboxPermissionsInput } from "./DeleteMailboxPermissionsInput";
import { DeleteMailboxPermissionsOutput } from "./DeleteMailboxPermissionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteMailboxPermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteMailboxPermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteMailboxPermissionsInput
  },
  output: {
    shape: DeleteMailboxPermissionsOutput
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
