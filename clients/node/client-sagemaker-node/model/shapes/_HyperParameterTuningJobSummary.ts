import { _TrainingJobStatusCounters } from "./_TrainingJobStatusCounters";
import { _ObjectiveStatusCounters } from "./_ObjectiveStatusCounters";
import { _ResourceLimits } from "./_ResourceLimits";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _HyperParameterTuningJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "HyperParameterTuningJobName",
    "HyperParameterTuningJobArn",
    "HyperParameterTuningJobStatus",
    "Strategy",
    "CreationTime",
    "TrainingJobStatusCounters",
    "ObjectiveStatusCounters"
  ],
  members: {
    HyperParameterTuningJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    HyperParameterTuningJobArn: {
      shape: {
        type: "string"
      }
    },
    HyperParameterTuningJobStatus: {
      shape: {
        type: "string"
      }
    },
    Strategy: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    HyperParameterTuningEndTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    TrainingJobStatusCounters: {
      shape: _TrainingJobStatusCounters
    },
    ObjectiveStatusCounters: {
      shape: _ObjectiveStatusCounters
    },
    ResourceLimits: {
      shape: _ResourceLimits
    }
  }
};
