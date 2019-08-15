import { UnshareDirectoryInput } from "../shapes/UnshareDirectoryInput";
import { UnshareDirectoryOutput } from "../shapes/UnshareDirectoryOutput";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidTargetException } from "../shapes/InvalidTargetException";
import { DirectoryNotSharedException } from "../shapes/DirectoryNotSharedException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
