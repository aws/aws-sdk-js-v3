import { UpdateCommentInput } from "../shapes/UpdateCommentInput";
import { UpdateCommentOutput } from "../shapes/UpdateCommentOutput";
import { CommentContentRequiredException } from "../shapes/CommentContentRequiredException";
import { CommentContentSizeLimitExceededException } from "../shapes/CommentContentSizeLimitExceededException";
import { CommentDoesNotExistException } from "../shapes/CommentDoesNotExistException";
import { CommentIdRequiredException } from "../shapes/CommentIdRequiredException";
import { InvalidCommentIdException } from "../shapes/InvalidCommentIdException";
import { CommentNotCreatedByCallerException } from "../shapes/CommentNotCreatedByCallerException";
import { CommentDeletedException } from "../shapes/CommentDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const UpdateComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "UpdateComment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: UpdateCommentInput
  },
  output: {
    shape: UpdateCommentOutput
  },
  errors: [
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
    },
    {
      shape: CommentNotCreatedByCallerException
    },
    {
      shape: CommentDeletedException
    }
  ]
};
