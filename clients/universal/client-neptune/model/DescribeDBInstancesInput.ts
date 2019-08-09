import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBInstancesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBInstanceIdentifier: {
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
