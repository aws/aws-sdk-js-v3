import { PutDataCatalogEncryptionSettingsInput } from "../shapes/PutDataCatalogEncryptionSettingsInput";
import { PutDataCatalogEncryptionSettingsOutput } from "../shapes/PutDataCatalogEncryptionSettingsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutDataCatalogEncryptionSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutDataCatalogEncryptionSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PutDataCatalogEncryptionSettingsInput
  },
  output: {
    shape: PutDataCatalogEncryptionSettingsOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: InvalidInputException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
