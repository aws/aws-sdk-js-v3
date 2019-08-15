import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Note: _Structure_ = {
  type: "structure",
  required: ["Text", "UpdatedBy", "UpdatedAt"],
  members: {
    Text: {
      shape: {
        type: "string"
      }
    },
    UpdatedBy: {
      shape: {
        type: "string"
      }
    },
    UpdatedAt: {
      shape: {
        type: "string"
      }
    }
  }
};
