import { DeleteMailboxPermissionsInput } from "../shapes/DeleteMailboxPermissionsInput";
import { DeleteMailboxPermissionsOutput } from "../shapes/DeleteMailboxPermissionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
