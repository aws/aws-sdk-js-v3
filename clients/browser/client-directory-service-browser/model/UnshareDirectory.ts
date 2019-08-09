import { UnshareDirectoryInput } from "./UnshareDirectoryInput";
import { UnshareDirectoryOutput } from "./UnshareDirectoryOutput";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidTargetException } from "./InvalidTargetException";
import { DirectoryNotSharedException } from "./DirectoryNotSharedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UnshareDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UnshareDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UnshareDirectoryInput
  },
  output: {
    shape: UnshareDirectoryOutput
  },
  errors: [
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidTargetException
    },
    {
      shape: DirectoryNotSharedException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
