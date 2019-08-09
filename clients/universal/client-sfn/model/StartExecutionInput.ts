import { Structure as _Structure_ } from "@aws-sdk/types";

export const StartExecutionInput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn"],
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
    input: {
      shape: {
        type: "string",
        sensitive: true
      }
    }
  }
};
