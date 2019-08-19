import { StartSchemaExtensionInput } from "../shapes/StartSchemaExtensionInput";
import { StartSchemaExtensionOutput } from "../shapes/StartSchemaExtensionOutput";
import { DirectoryUnavailableException } from "../shapes/DirectoryUnavailableException";
import { EntityDoesNotExistException } from "../shapes/EntityDoesNotExistException";
import { InvalidParameterException } from "../shapes/InvalidParameterException";
import { SnapshotLimitExceededException } from "../shapes/SnapshotLimitExceededException";
import { ClientException } from "../shapes/ClientException";
import { ServiceException } from "../shapes/ServiceException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
