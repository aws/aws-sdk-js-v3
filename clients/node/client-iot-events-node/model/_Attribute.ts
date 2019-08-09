import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Attribute: _Structure_ = {
  type: "structure",
  required: ["jsonPath"],
  members: {
    jsonPath: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
