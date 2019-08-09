import { StartSchemaExtensionInput } from "./StartSchemaExtensionInput";
import { StartSchemaExtensionOutput } from "./StartSchemaExtensionOutput";
import { DirectoryUnavailableException } from "./DirectoryUnavailableException";
import { EntityDoesNotExistException } from "./EntityDoesNotExistException";
import { InvalidParameterException } from "./InvalidParameterException";
import { SnapshotLimitExceededException } from "./SnapshotLimitExceededException";
import { ClientException } from "./ClientException";
import { ServiceException } from "./ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const StartSchemaExtension: _Operation_ = {
  metadata: ServiceMetadata,
  name: "StartSchemaExtension",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: StartSchemaExtensionInput
  },
  output: {
    shape: StartSchemaExtensionOutput
  },
  errors: [
    {
      shape: DirectoryUnavailableException
    },
    {
      shape: EntityDoesNotExistException
    },
    {
      shape: InvalidParameterException
    },
    {
      shape: SnapshotLimitExceededException
    },
    {
      shape: ClientException
    },
    {
      shape: ServiceException
    }
  ]
};
