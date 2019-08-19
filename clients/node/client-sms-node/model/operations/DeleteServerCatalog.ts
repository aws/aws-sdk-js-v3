import { DeleteServerCatalogInput } from "../shapes/DeleteServerCatalogInput";
import { DeleteServerCatalogOutput } from "../shapes/DeleteServerCatalogOutput";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { OperationNotPermittedException } from "../shapes/OperationNotPermittedException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { MissingRequiredParameterException } from "../shapes/MissingRequiredParameterException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
