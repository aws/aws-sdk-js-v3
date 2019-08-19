import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteEntityRecognizerInput: _Structure_ = {
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
