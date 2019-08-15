import { Structure as _Structure_ } from "@aws-sdk/types";

export const _TagFilter: _Structure_ = {
  type: "structure",
  required: ["tag"],
  members: {
    tag: {
      shape: {
        type: "string"
      }
    }
  }
};
