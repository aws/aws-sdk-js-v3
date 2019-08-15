import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrainingJobInput: _Structure_ = {
  type: "structure",
  required: ["TrainingJobName"],
  members: {
    TrainingJobName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
