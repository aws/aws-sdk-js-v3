import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteRetentionConfigurationInput: _Structure_ = {
  type: "structure",
  required: ["RetentionConfigurationName"],
  members: {
    RetentionConfigurationName: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
