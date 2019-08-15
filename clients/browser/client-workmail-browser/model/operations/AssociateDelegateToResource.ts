import { AssociateDelegateToResourceInput } from "../shapes/AssociateDelegateToResourceInput";
import { AssociateDelegateToResourceOutput } from "../shapes/AssociateDelegateToResourceOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AssociateDelegateToResource: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AssociateDelegateToResource",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AssociateDelegateToResourceInput
  },
  output: {
    shape: AssociateDelegateToResourceOutput
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
