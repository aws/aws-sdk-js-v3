import { _HyperParameters } from "./_HyperParameters";
import { _FinalHyperParameterTuningJobObjectiveMetric } from "./_FinalHyperParameterTuningJobObjectiveMetric";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTrainingJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "TrainingJobName",
    "TrainingJobArn",
    "CreationTime",
    "TrainingJobStatus",
    "TunedHyperParameters"
  ],
  members: {
    TrainingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TrainingJobArn: {
      shape: {
        type: "string"
      }
    },
    TuningJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingStartTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingJobStatus: {
      shape: {
        type: "string"
      }
    },
    TunedHyperParameters: {
      shape: _HyperParameters
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    FinalHyperParameterTuningJobObjectiveMetric: {
      shape: _FinalHyperParameterTuningJobObjectiveMetric
    },
    ObjectiveStatus: {
      shape: {
        type: "string"
      }
    }
  }
};
