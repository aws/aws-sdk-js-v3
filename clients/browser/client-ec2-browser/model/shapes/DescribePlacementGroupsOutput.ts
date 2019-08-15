import { _PlacementGroupList } from "./_PlacementGroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribePlacementGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    PlacementGroups: {
      shape: _PlacementGroupList,
      locationName: "placementGroupSet"
    }
  }
};
