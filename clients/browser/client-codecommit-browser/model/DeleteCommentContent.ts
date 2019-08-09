import { DeleteCommentContentInput } from "./DeleteCommentContentInput";
import { DeleteCommentContentOutput } from "./DeleteCommentContentOutput";
import { CommentDoesNotExistException } from "./CommentDoesNotExistException";
import { CommentIdRequiredException } from "./CommentIdRequiredException";
import { InvalidCommentIdException } from "./InvalidCommentIdException";
import { CommentDeletedException } from "./CommentDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

export const DeleteCommentContent: _Operation_ = {
  metadata: ServiceMetadata,
  name: "DeleteCommentContent",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: DeleteCommentContentInput
  },
  output: {
    shape: DeleteCommentContentOutput
  },
  errors: [
    {
      shape: CommentDoesNotExistException
    },
    {
      shape: CommentIdRequiredException
    },
    {
      shape: InvalidCommentIdException
    },
    {
      shape: CommentDeletedException
    }
  ]
};
