import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaxCountRule: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    MaxCount: {
      shape: {
        type: "integer"
      }
    },
    DeleteSourceFromS3: {
      shape: {
        type: "boolean"
      }
    }
  }
};
