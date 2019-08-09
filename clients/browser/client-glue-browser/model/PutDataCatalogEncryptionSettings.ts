import { PutDataCatalogEncryptionSettingsInput } from "./PutDataCatalogEncryptionSettingsInput";
import { PutDataCatalogEncryptionSettingsOutput } from "./PutDataCatalogEncryptionSettingsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
