import { GetFolderPathInput } from "../shapes/GetFolderPathInput";
import { GetFolderPathOutput } from "../shapes/GetFolderPathOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
