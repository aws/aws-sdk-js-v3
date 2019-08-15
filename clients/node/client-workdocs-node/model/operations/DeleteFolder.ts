import { DeleteFolderInput } from "../shapes/DeleteFolderInput";
import { DeleteFolderOutput } from "../shapes/DeleteFolderOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConflictingOperationException } from "../shapes/ConflictingOperationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
