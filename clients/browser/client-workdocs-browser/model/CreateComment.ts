import { CreateCommentInput } from "./CreateCommentInput";
import { CreateCommentOutput } from "./CreateCommentOutput";
import { EntityNotExistsException } from "./EntityNotExistsException";
import { ProhibitedStateException } from "./ProhibitedStateException";
import { UnauthorizedOperationException } from "./UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "./UnauthorizedResourceAccessException";
import { FailedDependencyException } from "./FailedDependencyException";
import { ServiceUnavailableException } from "./ServiceUnavailableException";
import { DocumentLockedForCommentsException } from "./DocumentLockedForCommentsException";
import { InvalidCommentOperationException } from "./InvalidCommentOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const CreateComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "CreateComment",
  http: {
    method: "POST",
    requestUri: "/api/v1/documents/{DocumentId}/versions/{VersionId}/comment"
  },
  input: {
    shape: CreateCommentInput
  },
  output: {
    shape: CreateCommentOutput
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
    },
    {
      shape: InvalidCommentOperationException
    }
  ]
};
