import { GetVaultAccessPolicyInput } from "../shapes/GetVaultAccessPolicyInput";
import { GetVaultAccessPolicyOutput } from "../shapes/GetVaultAccessPolicyOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetVaultAccessPolicy: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVaultAccessPolicy",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/access-policy"
  },
  input: {
    shape: GetVaultAccessPolicyInput
  },
  output: {
    shape: GetVaultAccessPolicyOutput
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
