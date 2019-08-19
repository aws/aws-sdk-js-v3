import { DeleteDirectoryInput } from "../shapes/DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "../shapes/DeleteDirectoryOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteDirectoryInput
  },
  output: {
    shape: DeleteDirectoryOutput
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
