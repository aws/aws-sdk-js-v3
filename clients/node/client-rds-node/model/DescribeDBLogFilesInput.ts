import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBLogFilesInput: _Structure_ = {
  type: "structure",
  required: ["DBInstanceIdentifier"],
  members: {
    DBInstanceIdentifier: {
      shape: {
        type: "string"
      }
    },
    FilenameContains: {
      shape: {
        type: "string"
      }
    },
    FileLastWritten: {
      shape: {
        type: "integer"
      }
    },
    FileSize: {
      shape: {
        type: "integer"
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
