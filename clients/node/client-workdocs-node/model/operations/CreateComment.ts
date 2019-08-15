import { CreateCommentInput } from "../shapes/CreateCommentInput";
import { CreateCommentOutput } from "../shapes/CreateCommentOutput";
import { EntityNotExistsException } from "../shapes/EntityNotExistsException";
import { ProhibitedStateException } from "../shapes/ProhibitedStateException";
import { UnauthorizedOperationException } from "../shapes/UnauthorizedOperationException";
import { UnauthorizedResourceAccessException } from "../shapes/UnauthorizedResourceAccessException";
import { FailedDependencyException } from "../shapes/FailedDependencyException";
import { ServiceUnavailableException } from "../shapes/ServiceUnavailableException";
import { DocumentLockedForCommentsException } from "../shapes/DocumentLockedForCommentsException";
import { InvalidCommentOperationException } from "../shapes/InvalidCommentOperationException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
