import { RejectSharedDirectoryInput } from "../shapes/RejectSharedDirectoryInput";
import { RejectSharedDirectoryOutput } from "../shapes/RejectSharedDirectoryOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryAlreadySharedException } from "../shapes/DirectoryAlreadySharedException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
