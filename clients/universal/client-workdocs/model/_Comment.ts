import { _User } from "./_User";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Comment: _Structure_ = {
  type: "structure",
  required: ["CommentId"],
  members: {
    CommentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ParentId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    ThreadId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Text: {
      shape: {
        type: "string",
        sensitive: true,
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
    Status: {
      shape: {
        type: "string"
      }
    },
    Visibility: {
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
