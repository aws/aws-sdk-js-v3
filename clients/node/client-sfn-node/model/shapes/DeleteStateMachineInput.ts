import { Structure as _Structure_ } from "@aws-sdk/types";

export const DeleteStateMachineInput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn"],
  members: {
    stateMachineArn: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
