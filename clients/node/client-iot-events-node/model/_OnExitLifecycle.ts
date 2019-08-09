import { _Events } from "./_Events";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _OnExitLifecycle: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    events: {
      shape: _Events
    }
  }
};
