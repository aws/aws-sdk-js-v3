import { Structure as _Structure_ } from "@aws-sdk/types";

export const AssociateDRTLogBucketInput: _Structure_ = {
  type: "structure",
  required: ["LogBucket"],
  members: {
    LogBucket: {
      shape: {
        type: "string",
        min: 3
      }
    }
  }
};
