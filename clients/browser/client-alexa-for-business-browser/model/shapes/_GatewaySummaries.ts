import { List as _List_ } from "@aws-sdk/types";
import { _GatewaySummary } from "./_GatewaySummary";

export const _GatewaySummaries: _List_ = {
  type: "list",
  member: {
    shape: _GatewaySummary
  }
};
