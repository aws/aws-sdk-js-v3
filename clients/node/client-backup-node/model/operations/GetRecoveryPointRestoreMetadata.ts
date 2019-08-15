import { GetRecoveryPointRestoreMetadataInput } from "../shapes/GetRecoveryPointRestoreMetadataInput";
import { GetRecoveryPointRestoreMetadataOutput } from "../shapes/GetRecoveryPointRestoreMetadataOutput";
import { ResourceNotFoundException } from "../shapes/ResourceNotFoundException";
import { InvalidParameterValueException } from "../shapes/InvalidParameterValueException";
import { MissingParameterValueException } from "../shapes/MissingParameterValueException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
