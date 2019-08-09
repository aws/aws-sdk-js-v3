import { Structure as _Structure_ } from "@aws-sdk/types";

export const _MaxAgeRule: _Structure_ = {
  type: "structure",
  required: ["Enabled"],
  members: {
    Enabled: {
      shape: {
        type: "boolean"
      }
    },
    MaxAgeInDays: {
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
