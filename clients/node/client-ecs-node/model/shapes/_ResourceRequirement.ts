import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceRequirement: _Structure_ = {
  type: "structure",
  required: ["value", "type"],
  members: {
    value: {
      shape: {
        type: "string"
      }
    },
    type: {
      shape: {
        type: "string"
      }
    }
  }
};
