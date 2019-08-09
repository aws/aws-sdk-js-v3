import { Structure as _Structure_ } from "@aws-sdk/types";

export const PutRetentionPolicyInput: _Structure_ = {
  type: "structure",
  required: ["logGroupName", "retentionInDays"],
  members: {
    logGroupName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    retentionInDays: {
      shape: {
        type: "integer"
      }
    }
  }
};
