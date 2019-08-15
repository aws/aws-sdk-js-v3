import { _FilterList } from "./_FilterList";
import { _PlacementGroupStringList } from "./_PlacementGroupStringList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlacementGroupsInput: _Structure_ = {
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
    GroupNames: {
      shape: _PlacementGroupStringList,
      locationName: "groupName"
    }
  }
};
