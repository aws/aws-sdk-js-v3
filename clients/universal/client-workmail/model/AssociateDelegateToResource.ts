import { AssociateDelegateToResourceInput } from "./AssociateDelegateToResourceInput";
import { AssociateDelegateToResourceOutput } from "./AssociateDelegateToResourceOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
