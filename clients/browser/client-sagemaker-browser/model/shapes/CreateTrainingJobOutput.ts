import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateTrainingJobOutput: _Structure_ = {
  type: "structure",
  required: ["TrainingJobArn"],
  members: {
    TrainingJobArn: {
      shape: {
        type: "string"
      }
    }
  }
};
