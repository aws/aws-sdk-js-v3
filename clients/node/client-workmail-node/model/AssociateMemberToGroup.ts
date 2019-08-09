import { AssociateMemberToGroupInput } from "./AssociateMemberToGroupInput";
import { AssociateMemberToGroupOutput } from "./AssociateMemberToGroupOutput";
import { DirectoryServiceAuthenticationFailedException } from "./DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { UnsupportedOperationException } from "./UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AssociateMemberToGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateMemberToGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateMemberToGroupInput
  },
  output: {
    shape: AssociateMemberToGroupOutput
  },
  errors: [
    {
      shape: DirectoryServiceAuthenticationFailedException
    },
    {
      shape: DirectoryUnavailableException
    },
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
    },
    {
      shape: UnsupportedOperationException
    }
  ]
};
