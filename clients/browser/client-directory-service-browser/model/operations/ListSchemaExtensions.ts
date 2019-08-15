import { ListSchemaExtensionsInput } from "../shapes/ListSchemaExtensionsInput";
import { ListSchemaExtensionsOutput } from "../shapes/ListSchemaExtensionsOutput";
import { InvalidNextTokenException } from "../shapes/InvalidNextTokenException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
