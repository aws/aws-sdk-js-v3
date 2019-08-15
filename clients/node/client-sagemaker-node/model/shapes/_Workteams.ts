import { List as _List_ } from "@aws-sdk/types";
import { _Workteam } from "./_Workteam";

export const _Workteams: _List_ = {
  type: "list",
  member: {
    shape: _Workteam
  }
};
