import { _HyperParameterTuningJobConfig } from "./_HyperParameterTuningJobConfig";
import { _HyperParameterTrainingJobDefinition } from "./_HyperParameterTrainingJobDefinition";
import { _TrainingJobStatusCounters } from "./_TrainingJobStatusCounters";
import { _ObjectiveStatusCounters } from "./_ObjectiveStatusCounters";
import { _HyperParameterTrainingJobSummary } from "./_HyperParameterTrainingJobSummary";
import { _HyperParameterTuningJobWarmStartConfig } from "./_HyperParameterTuningJobWarmStartConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeHyperParameterTuningJobOutput: _Structure_ = {
  type: "structure",
  required: [
    "HyperParameterTuningJobName",
    "HyperParameterTuningJobArn",
    "HyperParameterTuningJobConfig",
    "HyperParameterTuningJobStatus",
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
    HyperParameterTuningJobConfig: {
      shape: _HyperParameterTuningJobConfig
    },
    TrainingJobDefinition: {
      shape: _HyperParameterTrainingJobDefinition
    },
    HyperParameterTuningJobStatus: {
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
    BestTrainingJob: {
      shape: _HyperParameterTrainingJobSummary
    },
    OverallBestTrainingJob: {
      shape: _HyperParameterTrainingJobSummary
    },
    WarmStartConfig: {
      shape: _HyperParameterTuningJobWarmStartConfig
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    }
  }
};
