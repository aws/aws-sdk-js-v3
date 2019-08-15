import { _VariableDefinitions } from "./_VariableDefinitions";
import { _TimerDefinitions } from "./_TimerDefinitions";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _DetectorStateDefinition: _Structure_ = {
  type: "structure",
  required: ["stateName", "variables", "timers"],
  members: {
    stateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    variables: {
      shape: _VariableDefinitions
    },
    timers: {
      shape: _TimerDefinitions
    }
  }
};
