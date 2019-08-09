import { List as _List_ } from "@aws-sdk/types";
import { _SimulationJob } from "./_SimulationJob";

export const _SimulationJobs: _List_ = {
  type: "list",
  member: {
    shape: _SimulationJob
  }
};
