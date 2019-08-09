import { ListAliasesInput } from "./ListAliasesInput";
import { ListAliasesOutput } from "./ListAliasesOutput";
import { EntityNotFoundException } from "./EntityNotFoundException";
import { EntityStateException } from "./EntityStateException";
import { InvalidParameterException } from "./InvalidParameterException";
import { OrganizationNotFoundException } from "./OrganizationNotFoundException";
import { OrganizationStateException } from "./OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListAliases: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListAliases",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListAliasesInput
  },
  output: {
    shape: ListAliasesOutput
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
