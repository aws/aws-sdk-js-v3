import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CustomRule: _Structure_ = {
  type: "structure",
  required: ["source", "target"],
  members: {
    source: {
      shape: {
        type: "string",
        min: 1
      }
    },
    target: {
      shape: {
        type: "string",
        min: 1
      }
    },
    status: {
      shape: {
        type: "string",
        min: 3
      }
    },
    condition: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
