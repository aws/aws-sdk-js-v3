import { RejectSharedDirectoryInput } from "./RejectSharedDirectoryInput";
import { RejectSharedDirectoryOutput } from "./RejectSharedDirectoryOutput";
import { InvalidParameterException } from "./InvalidParameterException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { DirectoryAlreadySharedException } from "./DirectoryAlreadySharedException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const RejectSharedDirectory: _Operation_ = {
  metadata: ServiceMetadata,
  name: "RejectSharedDirectory",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: RejectSharedDirectoryInput
  },
  output: {
    shape: RejectSharedDirectoryOutput
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
