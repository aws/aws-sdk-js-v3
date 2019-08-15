import { _SnapshotIds } from "./_SnapshotIds";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DirectoryId: {
      shape: {
        type: "string"
      }
    },
    SnapshotIds: {
      shape: _SnapshotIds
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    Limit: {
      shape: {
        type: "integer"
      }
    }
  }
};
