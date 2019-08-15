import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBSnapshotsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    DBSnapshotIdentifier: {
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
    },
    DbiResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
