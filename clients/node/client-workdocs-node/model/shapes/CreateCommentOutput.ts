import { _Comment } from "./_Comment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateCommentOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Comment: {
      shape: _Comment
    }
  }
};
