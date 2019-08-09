import { Structure as _Structure_ } from "@aws-sdk/types";

export const DetectEntitiesInput: _Structure_ = {
  type: "structure",
  required: ["Text"],
  members: {
    Text: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
