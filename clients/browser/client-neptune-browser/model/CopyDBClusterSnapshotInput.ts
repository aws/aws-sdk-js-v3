import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyDBClusterSnapshotInput: _Structure_ = {
  type: "structure",
  required: [
    "SourceDBClusterSnapshotIdentifier",
    "TargetDBClusterSnapshotIdentifier"
  ],
  members: {
    SourceDBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    PreSignedUrl: {
      shape: {
        type: "string"
      }
    },
    CopyTags: {
      shape: {
        type: "boolean"
      }
    },
    Tags: {
      shape: _TagList
    }
  }
};
