import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStateMachineForExecutionOutput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn", "name", "definition", "roleArn", "updateDate"],
  members: {
    stateMachineArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    name: {
      shape: {
        type: "string",
        min: 1
      }
    },
    definition: {
      shape: {
        type: "string",
        sensitive: true,
        min: 1
      }
    },
    roleArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
    updateDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
