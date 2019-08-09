import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ResourceConfiguration: _Structure_ = {
  type: "structure",
  required: ["computeType", "volumeSizeInGB"],
  members: {
    computeType: {
      shape: {
        type: "string"
      }
    },
    volumeSizeInGB: {
      shape: {
        type: "integer",
        min: 1
      }
    }
  }
};
