import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateLagInput: _Structure_ = {
  type: "structure",
  required: ["lagId"],
  members: {
    lagId: {
      shape: {
        type: "string"
      }
    },
    lagName: {
      shape: {
        type: "string"
      }
    },
    minimumLinks: {
      shape: {
        type: "integer"
      }
    }
  }
};
