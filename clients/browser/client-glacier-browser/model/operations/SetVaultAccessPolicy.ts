import { SetVaultAccessPolicyInput } from "../shapes/SetVaultAccessPolicyInput";
import { SetVaultAccessPolicyOutput } from "../shapes/SetVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const SetVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "SetVaultAccessPolicy",
  http: {
    method: "PUT",
    requestUri: "/{accountId}/vaults/{vaultName}/access-policy"
  },
  input: {
    shape: SetVaultAccessPolicyInput
  },
  output: {
    shape: SetVaultAccessPolicyOutput
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
