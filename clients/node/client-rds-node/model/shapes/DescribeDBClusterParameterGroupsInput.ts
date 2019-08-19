import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeDBClusterParameterGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DBClusterParameterGroupName: {
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
