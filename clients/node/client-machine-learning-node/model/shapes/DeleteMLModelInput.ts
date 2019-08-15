import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteMLModelInput: _Structure_ = {
  type: "structure",
  required: ["MLModelId"],
  members: {
    MLModelId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
