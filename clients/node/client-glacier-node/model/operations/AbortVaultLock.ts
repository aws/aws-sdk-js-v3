import { AbortVaultLockInput } from "../shapes/AbortVaultLockInput";
import { AbortVaultLockOutput } from "../shapes/AbortVaultLockOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
