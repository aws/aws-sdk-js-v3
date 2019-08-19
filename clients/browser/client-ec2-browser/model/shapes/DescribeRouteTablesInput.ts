import { _FilterList } from "./_FilterList";
import { _ValueStringList } from "./_ValueStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeRouteTablesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    },
    DryRun: {
      shape: {
        type: "boolean"
      },
      locationName: "dryRun"
    },
    RouteTableIds: {
      shape: _ValueStringList,
      locationName: "RouteTableId"
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 5
      }
    }
  }
};
