import { List as _List_ } from "@aws-sdk/types";
import { _PlacementConstraint } from "./_PlacementConstraint";

export const _PlacementConstraints: _List_ = {
  type: "list",
  member: {
    shape: _PlacementConstraint
  }
};
