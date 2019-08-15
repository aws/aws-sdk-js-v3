import { _LabelCounters } from "./_LabelCounters";
import { _LabelingJobInputConfig } from "./_LabelingJobInputConfig";
import { _LabelingJobOutputConfig } from "./_LabelingJobOutputConfig";
import { _LabelingJobStoppingConditions } from "./_LabelingJobStoppingConditions";
import { _LabelingJobAlgorithmsConfig } from "./_LabelingJobAlgorithmsConfig";
import { _HumanTaskConfig } from "./_HumanTaskConfig";
import { _TagList } from "./_TagList";
import { _LabelingJobOutput } from "./_LabelingJobOutput";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeLabelingJobOutput: _Structure_ = {
  type: "structure",
  required: [
    "LabelingJobStatus",
    "LabelCounters",
    "CreationTime",
    "LastModifiedTime",
    "JobReferenceCode",
    "LabelingJobName",
    "LabelingJobArn",
    "InputConfig",
    "OutputConfig",
    "RoleArn",
    "HumanTaskConfig"
  ],
  members: {
    LabelingJobStatus: {
      shape: {
        type: "string"
      }
    },
    LabelCounters: {
      shape: _LabelCounters
    },
    FailureReason: {
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
    JobReferenceCode: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    LabelAttributeName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    InputConfig: {
      shape: _LabelingJobInputConfig
    },
    OutputConfig: {
      shape: _LabelingJobOutputConfig
    },
    RoleArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    LabelCategoryConfigS3Uri: {
      shape: {
        type: "string"
      }
    },
    StoppingConditions: {
      shape: _LabelingJobStoppingConditions
    },
    LabelingJobAlgorithmsConfig: {
      shape: _LabelingJobAlgorithmsConfig
    },
    HumanTaskConfig: {
      shape: _HumanTaskConfig
    },
    Tags: {
      shape: _TagList
    },
    LabelingJobOutput: {
      shape: _LabelingJobOutput
    }
  }
};
