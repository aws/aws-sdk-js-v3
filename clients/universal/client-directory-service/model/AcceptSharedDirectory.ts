import { AcceptSharedDirectoryInput } from "./AcceptSharedDirectoryInput";
import { AcceptSharedDirectoryOutput } from "./AcceptSharedDirectoryOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryAlreadySharedException } from "./DirectoryAlreadySharedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const AcceptSharedDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "AcceptSharedDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: AcceptSharedDirectoryInput
  },
  output: {
    shape: AcceptSharedDirectoryOutput
  },
  errors: [
    {
      shape: InvalidParameterException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: DirectoryAlreadySharedException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
