import { PutLifecycleConfigurationInput } from "../shapes/PutLifecycleConfigurationInput";
import { PutLifecycleConfigurationOutput } from "../shapes/PutLifecycleConfigurationOutput";
import { BadRequest } from "../shapes/BadRequest";
import { InternalServerError } from "../shapes/InternalServerError";
import { FileSystemNotFound } from "../shapes/FileSystemNotFound";
import { IncorrectFileSystemLifeCycleState } from "../shapes/IncorrectFileSystemLifeCycleState";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PutLifecycleConfiguration: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PutLifecycleConfiguration",
  http: {
    method: "PUT",
    requestUri:
      "/2015-02-01/file-systems/{FileSystemId}/lifecycle-configuration"
  },
  input: {
    shape: PutLifecycleConfigurationInput
  },
  output: {
    shape: PutLifecycleConfigurationOutput
  },
  errors: [
    {
      shape: BadRequest
    },
    {
      shape: InternalServerError
    },
    {
      shape: FileSystemNotFound
    },
    {
      shape: IncorrectFileSystemLifeCycleState
    }
  ]
};
