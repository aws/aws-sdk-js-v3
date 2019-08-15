import { Structure as _Structure_ } from "@aws-sdk/types";

export const UpdateStateMachineInput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn"],
  members: {
    stateMachineArn: {
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
    }
  }
};
