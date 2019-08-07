import { CompleteVaultLockInput } from "./CompleteVaultLockInput";
import { CompleteVaultLockOutput } from "./CompleteVaultLockOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CompleteVaultLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CompleteVaultLock",
  http: {
    method: "POST",
    requestUri: "/{accountId}/vaults/{vaultName}/lock-policy/{lockId}"
  },
  input: {
    shape: CompleteVaultLockInput
  },
  output: {
    shape: CompleteVaultLockOutput
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
