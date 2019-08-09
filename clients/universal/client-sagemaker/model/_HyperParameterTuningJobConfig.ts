import { _HyperParameterTuningJobObjective } from "./_HyperParameterTuningJobObjective";
import { _ResourceLimits } from "./_ResourceLimits";
import { _ParameterRanges } from "./_ParameterRanges";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTuningJobConfig: _Structure_ = {
  type: "structure",
  required: ["Strategy", "ResourceLimits"],
  members: {
    Strategy: {
      shape: {
        type: "string"
      }
    },
    HyperParameterTuningJobObjective: {
      shape: _HyperParameterTuningJobObjective
    },
    ResourceLimits: {
      shape: _ResourceLimits
    },
    ParameterRanges: {
      shape: _ParameterRanges
    },
    TrainingJobEarlyStoppingType: {
      shape: {
        type: "string"
      }
    }
  }
};
