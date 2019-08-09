import { GetDataCatalogEncryptionSettingsInput } from "./GetDataCatalogEncryptionSettingsInput";
import { GetDataCatalogEncryptionSettingsOutput } from "./GetDataCatalogEncryptionSettingsOutput";
import { InternalServiceException } from "./InternalServiceException";
import { InvalidInputException } from "./InvalidInputException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetDataCatalogEncryptionSettings: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetDataCatalogEncryptionSettings",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetDataCatalogEncryptionSettingsInput
  },
  output: {
    shape: GetDataCatalogEncryptionSettingsOutput
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
