import { List as _List_ } from "@aws-sdk/types";
import { _TagFilterList } from "./_TagFilterList";

export const _OnPremisesTagSetList: _List_ = {
  type: "list",
  member: {
    shape: _TagFilterList
  }
};
