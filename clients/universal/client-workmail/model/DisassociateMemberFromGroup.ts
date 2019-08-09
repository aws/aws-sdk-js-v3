import { DisassociateMemberFromGroupInput } from "./DisassociateMemberFromGroupInput";
import { DisassociateMemberFromGroupOutput } from "./DisassociateMemberFromGroupOutput";
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

export const DisassociateMemberFromGroup: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateMemberFromGroup",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateMemberFromGroupInput
  },
  output: {
    shape: DisassociateMemberFromGroupOutput
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
