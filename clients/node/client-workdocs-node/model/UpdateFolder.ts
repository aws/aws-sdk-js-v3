import { UpdateFolderInput } from "./UpdateFolderInput";
import { UpdateFolderOutput } from "./UpdateFolderOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { LimitExceededException } from "./LimitExceededException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateFolder: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateFolder",
  http: {
    method: "PATCH",
    requestUri: "/api/v1/folders/{FolderId}"
  },
  input: {
    shape: UpdateFolderInput
  },
  output: {
    shape: UpdateFolderOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: EntityAlreadyExistsException
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
      shape: LimitExceededException
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
