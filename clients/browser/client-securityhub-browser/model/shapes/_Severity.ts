import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Severity: _Structure_ = {
  type: "structure",
  required: ["Normalized"],
  members: {
    Product: {
      shape: {
        type: "float"
      }
    },
    Normalized: {
      shape: {
        type: "integer"
      }
    }
  }
};
