import { Structure as _Structure_ } from "@aws-sdk/types";

export const _RetentionConfiguration: _Structure_ = {
  type: "structure",
  required: ["Name", "RetentionPeriodInDays"],
  members: {
    Name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    RetentionPeriodInDays: {
      shape: {
        type: "integer",
        min: 30
      }
    }
  }
};
