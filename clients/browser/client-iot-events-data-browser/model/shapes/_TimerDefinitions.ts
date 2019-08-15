import { List as _List_ } from "@aws-sdk/types";
import { _TimerDefinition } from "./_TimerDefinition";

export const _TimerDefinitions: _List_ = {
  type: "list",
  member: {
    shape: _TimerDefinition
  }
};
