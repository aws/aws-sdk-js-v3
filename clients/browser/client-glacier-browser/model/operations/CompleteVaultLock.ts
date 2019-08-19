import { CompleteVaultLockInput } from "../shapes/CompleteVaultLockInput";
import { CompleteVaultLockOutput } from "../shapes/CompleteVaultLockOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
