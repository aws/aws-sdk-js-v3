import { GetCatalogImportStatusInput } from "./GetCatalogImportStatusInput";
import { GetCatalogImportStatusOutput } from "./GetCatalogImportStatusOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
