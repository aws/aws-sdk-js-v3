import { GetRecoveryPointRestoreMetadataInput } from "./GetRecoveryPointRestoreMetadataInput";
import { GetRecoveryPointRestoreMetadataOutput } from "./GetRecoveryPointRestoreMetadataOutput";
import { ResourceNotFoundException } from "./ResourceNotFoundException";
import { InvalidParameterValueException } from "./InvalidParameterValueException";
import { MissingParameterValueException } from "./MissingParameterValueException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetRecoveryPointRestoreMetadata: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetRecoveryPointRestoreMetadata",
  http: {
    method: "GET",
    requestUri:
      "/backup-vaults/{backupVaultName}/recovery-points/{recoveryPointArn}/restore-metadata"
  },
  input: {
    shape: GetRecoveryPointRestoreMetadataInput
  },
  output: {
    shape: GetRecoveryPointRestoreMetadataOutput
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
