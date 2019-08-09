import { _OnInputLifecycle } from "./_OnInputLifecycle";
import { _OnEnterLifecycle } from "./_OnEnterLifecycle";
import { _OnExitLifecycle } from "./_OnExitLifecycle";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _State: _Structure_ = {
  type: "structure",
  required: ["stateName"],
  members: {
    stateName: {
      shape: {
        type: "string",
        min: 1
      }
    },
    onInput: {
      shape: _OnInputLifecycle
    },
    onEnter: {
      shape: _OnEnterLifecycle
    },
    onExit: {
      shape: _OnExitLifecycle
    }
  }
};
