import { CancelSchemaExtensionInput } from "./CancelSchemaExtensionInput";
import { CancelSchemaExtensionOutput } from "./CancelSchemaExtensionOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CancelSchemaExtension: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CancelSchemaExtension",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: CancelSchemaExtensionInput
  },
  output: {
    shape: CancelSchemaExtensionOutput
  },
  errors: [
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
