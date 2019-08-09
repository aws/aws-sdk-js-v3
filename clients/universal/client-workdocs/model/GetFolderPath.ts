import { GetFolderPathInput } from "./GetFolderPathInput";
import { GetFolderPathOutput } from "./GetFolderPathOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const GetFolderPath: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetFolderPath",
  http: {
    method: "GET",
    requestUri: "/api/v1/folders/{FolderId}/path"
  },
  input: {
    shape: GetFolderPathInput
  },
  output: {
    shape: GetFolderPathOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: UnauthorizedOperationException
    },
    {
      shape: UnauthorizedResourceAccessException
    },
    {
      shape: FailedDependencyException
    },
    {
      shape: ServiceUnavailableException
    }
  ]
};
