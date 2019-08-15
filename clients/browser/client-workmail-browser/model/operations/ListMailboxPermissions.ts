import { ListMailboxPermissionsInput } from "../shapes/ListMailboxPermissionsInput";
import { ListMailboxPermissionsOutput } from "../shapes/ListMailboxPermissionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
