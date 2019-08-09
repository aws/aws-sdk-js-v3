import { List as _List_ } from "@aws-sdk/types";
import { _SimulationJobSummary } from "./_SimulationJobSummary";

export const _SimulationJobSummaries: _List_ = {
  type: "list",
  member: {
    shape: _SimulationJobSummary
  }
};
