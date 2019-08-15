import { RemoveTagsFromVaultInput } from "../shapes/RemoveTagsFromVaultInput";
import { RemoveTagsFromVaultOutput } from "../shapes/RemoveTagsFromVaultOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const RemoveTagsFromVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RemoveTagsFromVault",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/tags?operation=remove"
  },
  input: {
    shape: RemoveTagsFromVaultInput
  },
  output: {
    shape: RemoveTagsFromVaultOutput
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
