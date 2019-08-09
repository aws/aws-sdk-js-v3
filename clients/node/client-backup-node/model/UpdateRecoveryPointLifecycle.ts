import { UpdateRecoveryPointLifecycleInput } from "./UpdateRecoveryPointLifecycleInput";
import { UpdateRecoveryPointLifecycleOutput } from "./UpdateRecoveryPointLifecycleOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
