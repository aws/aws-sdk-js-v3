import { GetCommentInput } from "../shapes/GetCommentInput";
import { GetCommentOutput } from "../shapes/GetCommentOutput";
import { CommentDoesNotExistException } from "../shapes/CommentDoesNotExistException";
import { CommentIdRequiredException } from "../shapes/CommentIdRequiredException";
import { InvalidCommentIdException } from "../shapes/InvalidCommentIdException";
import { CommentDeletedException } from "../shapes/CommentDeletedException";
import { OperationModel as _Operation_ } from "@aws-sdk/types";
import { ServiceMetadata } from "../ServiceMetadata";

export const GetComment: _Operation_ = {
  metadata: ServiceMetadata,
  name: "GetComment",
  http: {
    method: "POST",
    requestUri: "/"
  },
  input: {
    shape: GetCommentInput
  },
  output: {
    shape: GetCommentOutput
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
