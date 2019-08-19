import { DeleteAliasInput } from "../shapes/DeleteAliasInput";
import { DeleteAliasOutput } from "../shapes/DeleteAliasOutput";
import { EntityNotFoundException } from "../shapes/EntityNotFoundException";
import { EntityStateException } from "../shapes/EntityStateException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { OrganizationNotFoundException } from "../shapes/OrganizationNotFoundException";
import { OrganizationStateException } from "../shapes/OrganizationStateException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteAlias: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteAlias",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteAliasInput
  },
  output: {
    shape: DeleteAliasOutput
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
