import { Structure as _Structure_ } from "@aws-sdk/types";

export const _ModelSummary: _Structure_ = {
  type: "structure",
  required: ["ModelName", "ModelArn", "CreationTime"],
  members: {
    ModelName: {
      shape: {
        type: "string"
      }
    },
    ModelArn: {
      shape: {
        type: "string",
        min: 20
      }
    },
    CreationTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
