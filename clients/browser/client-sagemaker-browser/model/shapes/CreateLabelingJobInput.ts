import { _LabelingJobInputConfig } from "./_LabelingJobInputConfig";
import { _LabelingJobOutputConfig } from "./_LabelingJobOutputConfig";
import { _LabelingJobStoppingConditions } from "./_LabelingJobStoppingConditions";
import { _LabelingJobAlgorithmsConfig } from "./_LabelingJobAlgorithmsConfig";
import { _HumanTaskConfig } from "./_HumanTaskConfig";
import { _TagList } from "./_TagList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLabelingJobInput: _Structure_ = {
  type: "structure",
  required: [
    "LabelingJobName",
    "LabelAttributeName",
    "InputConfig",
    "OutputConfig",
    "RoleArn",
    "HumanTaskConfig"
  ],
  members: {
    LabelingJobName: {
      shape: {
        type: "string",
        min: 1
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
    }
  }
};
