import { DeleteVaultAccessPolicyInput } from "../shapes/DeleteVaultAccessPolicyInput";
import { DeleteVaultAccessPolicyOutput } from "../shapes/DeleteVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteVaultAccessPolicy",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}/access-policy"
  },
  input: {
    shape: DeleteVaultAccessPolicyInput
  },
  output: {
    shape: DeleteVaultAccessPolicyOutput
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
