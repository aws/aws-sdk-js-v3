import { DeleteFolderContentsInput } from "./DeleteFolderContentsInput";
import { DeleteFolderContentsOutput } from "./DeleteFolderContentsOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
