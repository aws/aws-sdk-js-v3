import { _User } from "./_User";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CommentMetadata: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    CommentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Contributor: {
      shape: _User
    },
    CreatedTimestamp: {
      shape: {
        type: "timestamp"
      }
    },
    CommentStatus: {
      shape: {
        type: "string"
      }
    },
    RecipientId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
