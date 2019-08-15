import { Structure as _Structure_ } from "@aws-sdk/types";

export const CreateStateMachineOutput: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn", "creationDate"],
  members: {
    stateMachineArn: {
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
