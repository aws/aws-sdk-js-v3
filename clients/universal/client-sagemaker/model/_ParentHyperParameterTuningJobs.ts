import { List as _List_ } from "@aws-sdk/types";
import { _ParentHyperParameterTuningJob } from "./_ParentHyperParameterTuningJob";

export const _ParentHyperParameterTuningJobs: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _ParentHyperParameterTuningJob
  }
};
