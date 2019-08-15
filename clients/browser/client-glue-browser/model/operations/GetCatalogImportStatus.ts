import { GetCatalogImportStatusInput } from "../shapes/GetCatalogImportStatusInput";
import { GetCatalogImportStatusOutput } from "../shapes/GetCatalogImportStatusOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetCatalogImportStatus: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetCatalogImportStatus",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCatalogImportStatusInput
  },
  output: {
    shape: GetCatalogImportStatusOutput
  },
  errors: [
    {
      shape: InternalServiceException
    },
    {
      shape: OperationTimeoutException
    }
  ]
};
