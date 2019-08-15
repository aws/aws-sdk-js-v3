import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Secret: _Structure_ = {
  type: "structure",
  required: ["name", "valueFrom"],
  members: {
    name: {
      shape: {
        type: "string"
      }
    },
    valueFrom: {
      shape: {
        type: "string"
      }
    }
  }
};
