import { Structure as _Structure_ } from "@aws-sdk/types";

export const DisassociateDRTLogBucketInput: _Structure_ = {
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
