import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Eirp: _Structure_ = {
  type: "structure",
  required: ["units", "value"],
  members: {
    units: {
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
