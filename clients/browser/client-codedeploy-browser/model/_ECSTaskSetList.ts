import { List as _List_ } from "@aws-sdk/types";
import { _ECSTaskSet } from "./_ECSTaskSet";

export const _ECSTaskSetList: _List_ = {
  type: "list",
  member: {
    shape: _ECSTaskSet
  }
};
