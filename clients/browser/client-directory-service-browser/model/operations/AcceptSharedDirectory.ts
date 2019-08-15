import { AcceptSharedDirectoryInput } from "../shapes/AcceptSharedDirectoryInput";
import { AcceptSharedDirectoryOutput } from "../shapes/AcceptSharedDirectoryOutput";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { DirectoryAlreadySharedException } from "../shapes/DirectoryAlreadySharedException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
