import { DeleteRecoveryPointInput } from "../shapes/DeleteRecoveryPointInput";
import { DeleteRecoveryPointOutput } from "../shapes/DeleteRecoveryPointOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { InvalidRequestException } from "../shapes/InvalidRequestException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
