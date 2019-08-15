import { AddTagsToVaultInput } from "../shapes/AddTagsToVaultInput";
import { AddTagsToVaultOutput } from "../shapes/AddTagsToVaultOutput";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const AddTagsToVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AddTagsToVault",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/tags?operation=add"
  },
  input: {
    shape: AddTagsToVaultInput
  },
  output: {
    shape: AddTagsToVaultOutput
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
      shape: LimitExceededException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
