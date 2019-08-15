import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StateMachineListItem: _Structure_ = {
  type: "structure",
  required: ["stateMachineArn", "name", "creationDate"],
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
    creationDate: {
      shape: {
        type: "timestamp"
      }
    }
  }
};
