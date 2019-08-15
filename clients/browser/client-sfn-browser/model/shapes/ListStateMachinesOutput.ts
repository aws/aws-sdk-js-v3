import { _StateMachineList } from "./_StateMachineList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListStateMachinesOutput: _Structure_ = {
  type: "structure",
  required: ["stateMachines"],
  members: {
    stateMachines: {
      shape: _StateMachineList
    },
    nextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
