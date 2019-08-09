import { List as _List_ } from "@aws-sdk/types";
import { _FleetSummary } from "./_FleetSummary";

export const _FleetSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _FleetSummary
  }
};
