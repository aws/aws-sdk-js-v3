import { DisassociateMemberFromGroupInput } from "../shapes/DisassociateMemberFromGroupInput";
import { DisassociateMemberFromGroupOutput } from "../shapes/DisassociateMemberFromGroupOutput";
import { DirectoryServiceAuthenticationFailedException } from "../shapes/DirectoryServiceAuthenticationFailedException";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { UnsupportedOperationException } from "../shapes/UnsupportedOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
