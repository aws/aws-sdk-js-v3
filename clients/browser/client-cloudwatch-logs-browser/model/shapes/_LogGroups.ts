import { List as _List_ } from "@aws-sdk/types";
import { _LogGroup } from "./_LogGroup";

export const _LogGroups: _List_ = {
  type: "list",
  member: {
    shape: _LogGroup
  }
};
