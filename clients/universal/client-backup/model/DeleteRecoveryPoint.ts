import { DeleteRecoveryPointInput } from "./DeleteRecoveryPointInput";
import { DeleteRecoveryPointOutput } from "./DeleteRecoveryPointOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { InvalidRequestException } from "./InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteRecoveryPoint: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteRecoveryPoint",
  http: {
    method: "DELETE",
    requestUri:
      "/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}"
  },
  input: {
    shape: DeleteRecoveryPointInput
  },
  output: {
    shape: DeleteRecoveryPointOutput
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
    },
    {
      shape: InvalidRequestException
    }
  ]
};
