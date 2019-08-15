import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CopyDBSnapshotInput: _Structure_ = {
  type: "structure",
  required: ["SourceDBSnapshotIdentifier", "TargetDBSnapshotIdentifier"],
  members: {
    SourceDBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    TargetDBSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    KmsKeyId: {
      shape: {
        type: "string"
      }
    },
    Tags: {
      shape: _TagList
    },
    CopyTags: {
      shape: {
        type: "boolean"
      }
    },
    PreSignedUrl: {
      shape: {
        type: "string"
      }
    },
    OptionGroupName: {
      shape: {
        type: "string"
      }
    }
  }
};
