import { _TagKeyList } from "./_TagKeyList";
import { _TagValueList } from "./_TagValueList";
import { _SnapshotSortingEntityList } from "./_SnapshotSortingEntityList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeClusterSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotType: {
      shape: {
        type: "string"
      }
    },
    StartTime: {
      shape: {
        type: "timestamp"
      }
    },
    EndTime: {
      shape: {
        type: "timestamp"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    OwnerAccount: {
      shape: {
        type: "string"
      }
    },
    TagKeys: {
      shape: _TagKeyList
    },
    TagValues: {
      shape: _TagValueList
    },
    ClusterExists: {
      shape: {
        type: "boolean"
      }
    },
    SortingEntities: {
      shape: _SnapshotSortingEntityList
    }
  }
};
