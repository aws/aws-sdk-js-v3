import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _SnapshotCopyGrant: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    SnapshotCopyGrantName: {
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
    }
  }
};
