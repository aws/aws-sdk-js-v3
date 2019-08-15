import { _UserMetadata } from "./_UserMetadata";
import { _Participants } from "./_Participants";
import { _ResourceMetadata } from "./_ResourceMetadata";
import { _CommentMetadata } from "./_CommentMetadata";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Activity: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Type: {
      shape: {
        type: "string"
      }
    },
    TimeStamp: {
      shape: {
        type: "timestamp"
      }
    },
    IsIndirectActivity: {
      shape: {
        type: "boolean"
      }
    },
    OrganizationId: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Initiator: {
      shape: _UserMetadata
    },
    Participants: {
      shape: _Participants
    },
    ResourceMetadata: {
      shape: _ResourceMetadata
    },
    OriginalParent: {
      shape: _ResourceMetadata
    },
    CommentMetadata: {
      shape: _CommentMetadata
    }
  }
};
