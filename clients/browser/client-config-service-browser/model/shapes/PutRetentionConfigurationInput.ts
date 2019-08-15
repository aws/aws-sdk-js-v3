import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRetentionConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["RetentionPeriodInDays"],
  members: {
    RetentionPeriodInDays: {
      shape: {
        type: "integer",
        min: 30
      }
    }
  }
};
