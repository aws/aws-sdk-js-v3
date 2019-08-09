import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeOptionGroupOptionsInput: _Structure_ = {
  type: "structure",
  required: ["EngineName"],
  members: {
    EngineName: {
      shape: {
        type: "string"
      }
    },
    MajorEngineVersion: {
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
