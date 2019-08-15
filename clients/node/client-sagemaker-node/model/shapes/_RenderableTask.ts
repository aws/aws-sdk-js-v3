import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RenderableTask: _Structure_ = {
  type: "structure",
  required: ["Input"],
  members: {
    Input: {
      shape: {
        type: "string",
        min: 2
      }
    }
  }
};
