import { AbortVaultLockInput } from "./AbortVaultLockInput";
import { AbortVaultLockOutput } from "./AbortVaultLockOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AbortVaultLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AbortVaultLock",
  http: {
    method: "DELETE",
    requestUri: "/{accountId}/vaults/{vaultName}/lock-policy"
  },
  input: {
    shape: AbortVaultLockInput
  },
  output: {
    shape: AbortVaultLockOutput
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
