import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeApplicationStateOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    ApplicationStatus: {
      shape: {
        type: "string"
      }
    },
    LastUpdatedTime: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
