import { GetVaultLockInput } from "./GetVaultLockInput";
import { GetVaultLockOutput } from "./GetVaultLockOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetVaultLock: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetVaultLock",
  http: {
    method: "GET",
    requestUri: "/{accountId}/vaults/{vaultName}/lock-policy"
  },
  input: {
    shape: GetVaultLockInput
  },
  output: {
    shape: GetVaultLockOutput
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
