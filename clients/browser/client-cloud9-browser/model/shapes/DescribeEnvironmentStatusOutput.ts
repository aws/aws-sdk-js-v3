import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentStatusOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    status: {
      shape: {
        type: "string"
      }
    },
    message: {
      shape: {
        type: "string"
      }
    }
  }
};
