import { PostCommentReplyInput } from "../shapes/PostCommentReplyInput";
import { PostCommentReplyOutput } from "../shapes/PostCommentReplyOutput";
import { ClientRequestTokenRequiredException } from "../shapes/ClientRequestTokenRequiredException";
import { InvalidClientRequestTokenException } from "../shapes/InvalidClientRequestTokenException";
import { IdempotencyParameterMismatchException } from "../shapes/IdempotencyParameterMismatchException";
import { CommentContentRequiredException } from "../shapes/CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "../shapes/CommentContentSizeLimitExceededException";
import { CommentDoesNotExistException } from "../shapes/CommentDoesNotExistException";
import { CommentIdRequiredException } from "../shapes/CommentIdRequiredException";
import { InvalidCommentIdException } from "../shapes/InvalidCommentIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const PostCommentReply: _Operation_ = {
  metadata: ServiceMetadata,
  name: "PostCommentReply",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: PostCommentReplyInput
  },
  output: {
    shape: PostCommentReplyOutput
  },
  errors: [
    {
      shape: ClientRequestTokenRequiredException
    },
    {
      shape: InvalidClientRequestTokenException
    },
    {
      shape: IdempotencyParameterMismatchException
    },
    {
      shape: CommentContentRequiredException
    },
    {
      shape: CommentContentSizeLimitExceededException
    },
    {
      shape: CommentDoesNotExistException
    },
    {
      shape: CommentIdRequiredException
    },
    {
      shape: InvalidCommentIdException
    }
  ]
};
