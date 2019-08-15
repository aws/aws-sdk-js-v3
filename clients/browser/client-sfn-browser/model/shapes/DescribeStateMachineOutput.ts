import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeStateMachineOutput: _Structure_ = {
  type: "structure",
  required: [
    "stateMachineArn",
    "name",
    "definition",
    "roleArn",
    "creationDate"
  ],
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
    status: {
      shape: {
        type: "string"
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
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
