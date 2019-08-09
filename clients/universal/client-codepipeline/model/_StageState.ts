import { _TransitionState } from "./_TransitionState";
import { _ActionStateList } from "./_ActionStateList";
import { _StageExecution } from "./_StageExecution";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _StageState: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    stageName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    inboundTransitionState: {
      shape: _TransitionState
    },
    actionStates: {
      shape: _ActionStateList
    },
    latestExecution: {
      shape: _StageExecution
    }
  }
};
