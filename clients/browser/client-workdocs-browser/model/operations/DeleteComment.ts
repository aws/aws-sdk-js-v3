import { DeleteCommentInput } from "../shapes/DeleteCommentInput";
import { DeleteCommentOutput } from "../shapes/DeleteCommentOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DocumentLockedForCommentsException } from "../shapes/DocumentLockedForCommentsException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
