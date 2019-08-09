import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOptionGroupsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    OptionGroupName: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList
    },
    Marker: {
      shape: {
        type: "string"
      }
    },
    MaxRecords: {
      shape: {
        type: "integer"
      }
    },
    EngineName: {
      shape: {
        type: "string"
      }
    },
    MajorEngineVersion: {
      shape: {
        type: "string"
      }
    }
  }
};
