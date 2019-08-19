import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetInstancesInput: _Structure_ = {
  type: "structure",
  required: ["FleetId"],
  members: {
    DryRun: {
      shape: {
        type: "boolean"
      }
    },
    MaxResults: {
      shape: {
        type: "integer"
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    FleetId: {
      shape: {
        type: "string"
      }
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    }
  }
};
