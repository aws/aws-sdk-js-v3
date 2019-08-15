import { DeleteVaultInput } from "../shapes/DeleteVaultInput";
import { DeleteVaultOutput } from "../shapes/DeleteVaultOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVault: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVault",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}"
  },
  input: {
    shape: DeleteVaultInput
  },
  output: {
    shape: DeleteVaultOutput
  },
  errors: [
    {
      shape: ResourceNotFoundException
    },
    {
      shape: InvalidParameterValueException
    },
    {
      shape: MissingParameterValueException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
