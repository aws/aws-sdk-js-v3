import { DeleteVaultAccessPolicyInput } from "./DeleteVaultAccessPolicyInput";
import { DeleteVaultAccessPolicyOutput } from "./DeleteVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
