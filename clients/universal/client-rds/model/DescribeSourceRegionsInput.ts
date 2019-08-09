import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeSourceRegionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    RegionName: {
      shape: {
        type: "string"
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
    Filters: {
      shape: _FilterList
    }
  }
};
