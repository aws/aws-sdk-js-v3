import { Structure as _Structure_ } from "@aws-sdk/types";

export const StopTrainingEntityRecognizerInput: _Structure_ = {
  type: "structure",
  required: ["EntityRecognizerArn"],
  members: {
    EntityRecognizerArn: {
      shape: {
        type: "string"
      }
    }
  }
};
