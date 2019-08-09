import { _LabelCounters } from "./_LabelCounters";
import { _LabelingJobOutput } from "./_LabelingJobOutput";
import { _LabelingJobInputConfig } from "./_LabelingJobInputConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobSummary: _Structure_ = {
  type: "structure",
  required: [
    "LabelingJobName",
    "LabelingJobArn",
    "CreationTime",
    "LastModifiedTime",
    "LabelingJobStatus",
    "LabelCounters",
    "WorkteamArn",
    "PreHumanTaskLambdaArn"
  ],
  members: {
    LabelingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    LabelingJobArn: {
      shape: {
        type: "string"
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    },
    LastModifiedTime: {
      shape: {
        type: "timestamp"
      }
    },
    LabelingJobStatus: {
      shape: {
        type: "string"
      }
    },
    LabelCounters: {
      shape: _LabelCounters
    },
    WorkteamArn: {
      shape: {
        type: "string"
      }
    },
    PreHumanTaskLambdaArn: {
      shape: {
        type: "string"
      }
    },
    AnnotationConsolidationLambdaArn: {
      shape: {
        type: "string"
      }
    },
    FailureReason: {
      shape: {
        type: "string"
      }
    },
    LabelingJobOutput: {
      shape: _LabelingJobOutput
    },
    InputConfig: {
      shape: _LabelingJobInputConfig
    }
  }
};
