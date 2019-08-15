import { ImportCatalogToGlueInput } from "../shapes/ImportCatalogToGlueInput";
import { ImportCatalogToGlueOutput } from "../shapes/ImportCatalogToGlueOutput";
import { InternalServiceException } from "../shapes/InternalServiceException";
import { OperationTimeoutException } from "../shapes/OperationTimeoutException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
