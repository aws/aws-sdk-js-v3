import { _ValueStringList } from "./_ValueStringList";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrafficMirrorTargetsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    TrafficMirrorTargetIds: {
      shape: _ValueStringList,
      locationName: "TrafficMirrorTargetId"
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
