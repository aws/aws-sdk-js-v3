import { ImportCatalogToGlueInput } from "./ImportCatalogToGlueInput";
import { ImportCatalogToGlueOutput } from "./ImportCatalogToGlueOutput";
import { InternalServiceException } from "./InternalServiceException";
import { OperationTimeoutException } from "./OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportCatalogToGlue: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportCatalogToGlue",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportCatalogToGlueInput
  },
  output: {
    shape: ImportCatalogToGlueOutput
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
