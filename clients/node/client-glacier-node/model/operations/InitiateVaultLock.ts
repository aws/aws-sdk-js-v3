import { InitiateVaultLockInput } from "../shapes/InitiateVaultLockInput";
import { InitiateVaultLockOutput } from "../shapes/InitiateVaultLockOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const InitiateVaultLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "InitiateVaultLock",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/lock-policy"
  },
  input: {
    shape: InitiateVaultLockInput
  },
  output: {
    shape: InitiateVaultLockOutput
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
