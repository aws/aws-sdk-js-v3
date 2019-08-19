import { DeleteCommentContentInput } from "../shapes/DeleteCommentContentInput";
import { DeleteCommentContentOutput } from "../shapes/DeleteCommentContentOutput";
import { CommentDoesNotExistException } from "../shapes/CommentDoesNotExistException";
import { CommentIdRequiredException } from "../shapes/CommentIdRequiredException";
import { InvalidCommentIdException } from "../shapes/InvalidCommentIdException";
import { CommentDeletedException } from "../shapes/CommentDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

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
