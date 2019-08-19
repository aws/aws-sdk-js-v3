import { ImportServerCatalogInput } from "../shapes/ImportServerCatalogInput";
import { ImportServerCatalogOutput } from "../shapes/ImportServerCatalogOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { NoConnectorsAvailableException } from "../shapes/NoConnectorsAvailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
