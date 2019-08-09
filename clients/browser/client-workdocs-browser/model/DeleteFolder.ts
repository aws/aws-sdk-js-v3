import { DeleteFolderInput } from "./DeleteFolderInput";
import { DeleteFolderOutput } from "./DeleteFolderOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteFolder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteFolder",
  http: {
    method: "DELETE",
    requestUri: "/api/v1/folders/{FolderId}"
  },
  input: {
    shape: DeleteFolderInput
  },
  output: {
    shape: DeleteFolderOutput
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
      shape: ConcurrentModificationException
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
