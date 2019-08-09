import { _ValueStringList } from "./_ValueStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrafficMirrorFiltersInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorFilterIds: {
      shape: _ValueStringList,
      locationName: "TrafficMirrorFilterId"
    },
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
