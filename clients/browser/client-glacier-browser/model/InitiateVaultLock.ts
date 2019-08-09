import { InitiateVaultLockInput } from "./InitiateVaultLockInput";
import { InitiateVaultLockOutput } from "./InitiateVaultLockOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
