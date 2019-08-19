import { List as _List_ } from "@aws-sdk/types";
import { _PlacementSummary } from "./_PlacementSummary";

export const _PlacementSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _PlacementSummary
  }
};
