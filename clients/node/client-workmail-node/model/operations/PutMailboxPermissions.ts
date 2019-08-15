import { PutMailboxPermissionsInput } from "../shapes/PutMailboxPermissionsInput";
import { PutMailboxPermissionsOutput } from "../shapes/PutMailboxPermissionsOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
