import { ImportServerCatalogInput } from "./ImportServerCatalogInput";
import { ImportServerCatalogOutput } from "./ImportServerCatalogOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { NoConnectorsAvailableException } from "./NoConnectorsAvailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ImportServerCatalog: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ImportServerCatalog",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ImportServerCatalogInput
  },
  output: {
    shape: ImportServerCatalogOutput
  },
  errors: [
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: OperationNotPermittedException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: MissingRequiredParameterException
    },
    {
      shape: NoConnectorsAvailableException
    }
  ]
};
