import { ListMailboxPermissionsInput } from "./ListMailboxPermissionsInput";
import { ListMailboxPermissionsOutput } from "./ListMailboxPermissionsOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListMailboxPermissions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListMailboxPermissions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListMailboxPermissionsInput
  },
  output: {
    shape: ListMailboxPermissionsOutput
  },
  errors: [
    {
      shape: EntityNotFoundException
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
