import { List as _List_ } from "@aws-sdk/types";
import { _HyperParameterTuningJobObjective } from "./_HyperParameterTuningJobObjective";

export const _HyperParameterTuningJobObjectives: _List_ = {
  type: "list",
  member: {
    shape: _HyperParameterTuningJobObjective
  }
};
