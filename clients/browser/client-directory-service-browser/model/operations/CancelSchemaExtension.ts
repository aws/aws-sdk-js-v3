import { CancelSchemaExtensionInput } from "../shapes/CancelSchemaExtensionInput";
import { CancelSchemaExtensionOutput } from "../shapes/CancelSchemaExtensionOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
