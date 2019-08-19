import { _Location } from "./_Location";
import { _Comment } from "./_Comment";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const PostCommentForComparedCommitOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    repositoryName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    beforeCommitId: {
      shape: {
        type: "string"
      }
    },
    afterCommitId: {
      shape: {
        type: "string"
      }
    },
    beforeBlobId: {
      shape: {
        type: "string"
      }
    },
    afterBlobId: {
      shape: {
        type: "string"
      }
    },
    location: {
      shape: _Location
    },
    comment: {
      shape: _Comment
    }
  }
};
