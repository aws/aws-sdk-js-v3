import { UpdateFolderInput } from "../shapes/UpdateFolderInput";
import { UpdateFolderOutput } from "../shapes/UpdateFolderOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConflictingOperationException } from "../shapes/ConflictingOperationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
