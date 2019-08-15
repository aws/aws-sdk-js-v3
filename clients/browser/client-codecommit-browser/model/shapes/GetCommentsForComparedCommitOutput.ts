import { _CommentsForComparedCommitData } from "./_CommentsForComparedCommitData";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetCommentsForComparedCommitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    commentsForComparedCommitData: {
      shape: _CommentsForComparedCommitData
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
