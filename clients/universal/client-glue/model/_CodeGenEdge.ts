import { Structure as _Structure_ } from "@aws-sdk/types";

export const _CodeGenEdge: _Structure_ = {
  type: "structure",
  required: ["Source", "Target"],
  members: {
    Source: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Target: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TargetParameter: {
      shape: {
        type: "string"
      }
    }
  }
};
