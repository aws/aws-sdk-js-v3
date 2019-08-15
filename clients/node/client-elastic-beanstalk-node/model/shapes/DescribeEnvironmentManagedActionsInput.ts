import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentManagedActionsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentName: {
      shape: {
        type: "string"
      }
    },
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    Status: {
      shape: {
        type: "string"
      }
    }
  }
};
