import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateLabelingJobOutput: _Structure_ = {
  type: "structure",
  required: ["LabelingJobArn"],
  members: {
    LabelingJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
