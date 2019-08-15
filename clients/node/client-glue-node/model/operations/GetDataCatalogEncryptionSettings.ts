import { GetDataCatalogEncryptionSettingsInput } from "../shapes/GetDataCatalogEncryptionSettingsInput";
import { GetDataCatalogEncryptionSettingsOutput } from "../shapes/GetDataCatalogEncryptionSettingsOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { InvalidInputException } from "../shapes/InvalidInputException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
