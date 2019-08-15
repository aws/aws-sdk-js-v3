import { Structure as _Structure_ } from "@aws-sdk/types";

export const _AlertTarget: _Structure_ = {
  type: "structure",
  required: ["alertTargetArn", "roleArn"],
  members: {
    alertTargetArn: {
      shape: {
        type: "string"
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 20
      }
    }
  }
};
