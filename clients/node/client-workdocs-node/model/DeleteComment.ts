import { DeleteCommentInput } from "./DeleteCommentInput";
import { DeleteCommentOutput } from "./DeleteCommentOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DocumentLockedForCommentsException } from "./DocumentLockedForCommentsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteComment",
  http: {
    method: "DELETE",
    requestUri:
      "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment/{CommentId}"
  },
  input: {
    shape: DeleteCommentInput
  },
  output: {
    shape: DeleteCommentOutput
  },
  errors: [
    {
      shape: EntityNotExistsException
    },
    {
      shape: ProhibitedStateException
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
    },
    {
      shape: DocumentLockedForCommentsException
    }
  ]
};
