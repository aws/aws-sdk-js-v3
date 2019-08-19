import { UpdateRecoveryPointLifecycleInput } from "../shapes/UpdateRecoveryPointLifecycleInput";
import { UpdateRecoveryPointLifecycleOutput } from "../shapes/UpdateRecoveryPointLifecycleOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateRecoveryPointLifecycle: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateRecoveryPointLifecycle",
  http: {
    method: "POST",
    requestUri:
      "/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}"
  },
  input: {
    shape: UpdateRecoveryPointLifecycleInput
  },
  output: {
    shape: UpdateRecoveryPointLifecycleOutput
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
