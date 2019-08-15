import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Elevation: _Structure_ = {
  type: "structure",
  required: ["unit", "value"],
  members: {
    unit: {
      shape: {
        type: "string"
      }
    },
    value: {
      shape: {
        type: "float"
      }
    }
  }
};
