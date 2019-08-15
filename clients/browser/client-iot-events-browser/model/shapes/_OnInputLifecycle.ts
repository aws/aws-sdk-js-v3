import { _Events } from "./_Events";
import { _TransitionEvents } from "./_TransitionEvents";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OnInputLifecycle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    events: {
      shape: _Events
    },
    transitionEvents: {
      shape: _TransitionEvents
    }
  }
};
