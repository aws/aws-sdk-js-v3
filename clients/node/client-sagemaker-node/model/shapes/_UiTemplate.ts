import { Structure as _Structure_ } from "@aws-sdk/types";

export const _UiTemplate: _Structure_ = {
  type: "structure",
  required: ["Content"],
  members: {
    Content: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
