import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeEnvironmentManagedActionHistoryInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    EnvironmentId: {
      shape: {
        type: "string"
      }
    },
    EnvironmentName: {
      shape: {
        type: "string",
        min: 4
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    },
    MaxItems: {
      shape: {
        type: "integer"
      }
    }
  }
};
