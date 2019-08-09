import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LabelingJobOutput: _Structure_ = {
  type: "structure",
  required: ["OutputDatasetS3Uri"],
  members: {
    OutputDatasetS3Uri: {
      shape: {
        type: "string"
      }
    },
    FinalActiveLearningModelArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
