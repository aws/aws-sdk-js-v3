import { DisassociateDelegateFromResourceInput } from "../shapes/DisassociateDelegateFromResourceInput";
import { DisassociateDelegateFromResourceOutput } from "../shapes/DisassociateDelegateFromResourceOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DisassociateDelegateFromResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DisassociateDelegateFromResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DisassociateDelegateFromResourceInput
  },
  output: {
    shape: DisassociateDelegateFromResourceOutput
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
