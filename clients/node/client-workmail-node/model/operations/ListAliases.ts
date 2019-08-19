import { ListAliasesInput } from "../shapes/ListAliasesInput";
import { ListAliasesOutput } from "../shapes/ListAliasesOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
