import { _LabelingJobResourceConfig } from "./_LabelingJobResourceConfig";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobAlgorithmsConfig: _Structure_ = {
  type: "structure",
  required: ["LabelingJobAlgorithmSpecificationArn"],
  members: {
    LabelingJobAlgorithmSpecificationArn: {
      shape: {
        type: "string"
      }
    },
    InitialActiveLearningModelArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    LabelingJobResourceConfig: {
      shape: _LabelingJobResourceConfig
    }
  }
};
