import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ConnectionDraining: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    Timeout: {
      shape: {
        type: "integer"
      }
    }
  }
};
