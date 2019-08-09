import { DeleteServerCatalogInput } from "./DeleteServerCatalogInput";
import { DeleteServerCatalogOutput } from "./DeleteServerCatalogOutput";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { OperationNotPermittedException } from "./OperationNotPermittedException";
import { InvalidParameterException } from "./InvalidParameterException";
import { MissingRequiredParameterException } from "./MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteServerCatalog: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteServerCatalog",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteServerCatalogInput
  },
  output: {
    shape: DeleteServerCatalogOutput
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
    }
  ]
};
