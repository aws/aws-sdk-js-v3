import { UpdateDocumentInput } from "../shapes/UpdateDocumentInput";
import { UpdateDocumentOutput } from "../shapes/UpdateDocumentOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { EntityAlreadyExistsException } from "../shapes/EntityAlreadyExistsException";
import { LimitExceededException } from "../shapes/LimitExceededException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { ConflictingOperationException } from "../shapes/ConflictingOperationException";
import { ConcurrentModificationException } from "../shapes/ConcurrentModificationException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
