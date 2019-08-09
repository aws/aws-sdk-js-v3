import { UpdateDocumentInput } from "./UpdateDocumentInput";
import { UpdateDocumentOutput } from "./UpdateDocumentOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { EntityAlreadyExistsException } from "./EntityAlreadyExistsException";
import { LimitExceededException } from "./LimitExceededException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { ConflictingOperationException } from "./ConflictingOperationException";
import { ConcurrentModificationException } from "./ConcurrentModificationException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const UpdateDocument: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateDocument",
  http: {
    method: "PATCH",
    requestUri: "/api/v1/documents/{DocumentId}"
  },
  input: {
    shape: UpdateDocumentInput
  },
  output: {
    shape: UpdateDocumentOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: EntityAlreadyExistsException
    },
    {
      shape: LimitExceededException
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
