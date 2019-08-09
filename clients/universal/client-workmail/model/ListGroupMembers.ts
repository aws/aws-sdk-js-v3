import { ListGroupMembersInput } from "./ListGroupMembersInput";
import { ListGroupMembersOutput } from "./ListGroupMembersOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListGroupMembers: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListGroupMembers",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListGroupMembersInput
  },
  output: {
    shape: ListGroupMembersOutput
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
