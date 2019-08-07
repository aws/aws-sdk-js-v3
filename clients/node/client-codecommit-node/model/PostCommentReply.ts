import { PostCommentReplyInput } from "./PostCommentReplyInput";
import { PostCommentReplyOutput } from "./PostCommentReplyOutput";
import { ClientRequestTokenRequiredException } from "./ClientRequestTokenRequiredException";
import { InvalidClientRequestTokenException } from "./InvalidClientRequestTokenException";
import { IdempotencyParameterMismatchException } from "./IdempotencyParameterMismatchException";
import { CommentContentRequiredException } from "./CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "./CommentContentSizeLimitExceededException";
import { CommentDoesNotExistException } from "./CommentDoesNotExistException";
import { CommentIdRequiredException } from "./CommentIdRequiredException";
import { InvalidCommentIdException } from "./InvalidCommentIdException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "./ServiceMetadata";

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
