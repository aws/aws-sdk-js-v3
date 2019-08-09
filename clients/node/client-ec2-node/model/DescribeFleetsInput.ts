import { _FleetIdSet } from "./_FleetIdSet";
import { _FilterList } from "./_FilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeFleetsInput: _Structure_ = {
  type: "structure",
  required: [],
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
    FleetIds: {
      shape: _FleetIdSet,
      locationName: "FleetId"
    },
    Filters: {
      shape: _FilterList,
      locationName: "Filter"
    }
  }
};
