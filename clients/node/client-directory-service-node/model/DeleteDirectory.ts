import { DeleteDirectoryInput } from "./DeleteDirectoryInput";
import { DeleteDirectoryOutput } from "./DeleteDirectoryOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
