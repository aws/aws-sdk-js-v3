import { ListSchemaExtensionsInput } from "./ListSchemaExtensionsInput";
import { ListSchemaExtensionsOutput } from "./ListSchemaExtensionsOutput";
import { InvalidNextTokenException } from "./InvalidNextTokenException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const ListSchemaExtensions: _Operation_ = {
  metadata: ServiceMetadata,
  name: "ListSchemaExtensions",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: ListSchemaExtensionsInput
  },
  output: {
    shape: ListSchemaExtensionsOutput
  },
  errors: [
    {
      shape: InvalidNextTokenException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
