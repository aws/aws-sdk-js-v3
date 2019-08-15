import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBClusterSnapshotIdentifier: {
      shape: {
        type: "string"
      }
    },
    SnapshotType: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
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
    IncludeShared: {
      shape: {
        type: "boolean"
      }
    },
    IncludePublic: {
      shape: {
        type: "boolean"
      }
    }
  }
};
