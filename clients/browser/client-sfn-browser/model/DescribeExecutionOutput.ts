import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeExecutionOutput: _Structure_ = {
  type: "structure",
  required: ["executionArn", "stateMachineArn", "status", "startDate", "input"],
  members: {
    executionArn: {
      shape: {
        type: "string",
        min: 1
      }
    },
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
    status: {
      shape: {
        type: "string"
      }
    },
    startDate: {
      shape: {
        type: "timestamp"
      }
    },
    stopDate: {
      shape: {
        type: "timestamp"
      }
    },
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    },
    output: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
