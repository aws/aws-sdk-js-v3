import { List as _List_ } from "@aws-sdk/types";
import { _MitigationAction } from "./_MitigationAction";

export const _MitigationActionList: _List_ = {
  type: "list",
  member: {
    shape: _MitigationAction
  }
};
