import { List as _List_ } from "@aws-sdk/types";
import { _SimulationApplicationSummary } from "./_SimulationApplicationSummary";

export const _SimulationApplicationSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SimulationApplicationSummary
  }
};
