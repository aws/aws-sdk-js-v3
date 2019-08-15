import { List as _List_ } from "@aws-sdk/types";
import { _PlacementGroup } from "./_PlacementGroup";

export const _PlacementGroupList: _List_ = {
  type: "list",
  member: {
    shape: _PlacementGroup,
    locationName: "item"
  }
};
