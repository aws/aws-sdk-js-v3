import { ListTagsForVaultInput } from "../shapes/ListTagsForVaultInput";
import { ListTagsForVaultOutput } from "../shapes/ListTagsForVaultOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const ListTagsForVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListTagsForVault",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/tags"
  },
  input: {
    shape: ListTagsForVaultInput
  },
  output: {
    shape: ListTagsForVaultOutput
  },
  errors: [
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ResourceNotFoundException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
