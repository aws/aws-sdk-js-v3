import { List as _List_ } from "@aws-sdk/types";
import { _BuildPhase } from "./_BuildPhase";

export const _BuildPhases: _List_ = {
  type: "list",
  member: {
    shape: _BuildPhase
  }
};
