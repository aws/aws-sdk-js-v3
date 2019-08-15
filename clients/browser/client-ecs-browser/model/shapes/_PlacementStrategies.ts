import { List as _List_ } from "@aws-sdk/types";
import { _PlacementStrategy } from "./_PlacementStrategy";

export const _PlacementStrategies: _List_ = {
  type: "list",
  member: {
    shape: _PlacementStrategy
  }
};
