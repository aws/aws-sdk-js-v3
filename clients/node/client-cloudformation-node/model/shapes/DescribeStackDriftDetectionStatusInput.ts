import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackDriftDetectionStatusInput: _Structure_ = {
  type: "structure",
  required: ["StackDriftDetectionId"],
  members: {
    StackDriftDetectionId: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
