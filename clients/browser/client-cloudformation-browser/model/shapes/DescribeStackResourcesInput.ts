import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStackResourcesInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    StackName: {
      shape: {
        type: "string"
      }
    },
    LogicalResourceId: {
      shape: {
        type: "string"
      }
    },
    PhysicalResourceId: {
      shape: {
        type: "string"
      }
    }
  }
};
