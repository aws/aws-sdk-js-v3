import { _ParentHyperParameterTuningJobs } from "./_ParentHyperParameterTuningJobs";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTuningJobWarmStartConfig: _Structure_ = {
  type: "structure",
  required: ["ParentHyperParameterTuningJobs", "WarmStartType"],
  members: {
    ParentHyperParameterTuningJobs: {
      shape: _ParentHyperParameterTuningJobs
    },
    WarmStartType: {
      shape: {
        type: "string"
      }
    }
  }
};
