import { DeleteFolderContentsInput } from "../shapes/DeleteFolderContentsInput";
import { DeleteFolderContentsOutput } from "../shapes/DeleteFolderContentsOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConflictingOperationException } from "../shapes/ConflictingOperationException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const DeleteFolderContents: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFolderContents",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/folders/{FolderId}/contents"
  },
  input: {
    shape: DeleteFolderContentsInput
  },
  output: {
    shape: DeleteFolderContentsOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: ProhibitedStateException
    },
    {
      shape: ConflictingOperationException
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
