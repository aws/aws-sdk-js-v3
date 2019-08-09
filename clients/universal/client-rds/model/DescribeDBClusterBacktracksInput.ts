import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterBacktracksInput: _Structure_ = {
  type: "structure",
  required: ["DBClusterIdentifier"],
  members: {
    DBClusterIdentifier: {
      shape: {
        type: "string"
      }
    },
    BacktrackIdentifier: {
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
    }
  }
};
