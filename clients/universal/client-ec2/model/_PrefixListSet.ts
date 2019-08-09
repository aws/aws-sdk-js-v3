import { List as _List_ } from "@aws-sdk/types";
import { _PrefixList } from "./_PrefixList";

export const _PrefixListSet: _List_ = {
  type: "list",
  member: {
    shape: _PrefixList,
    locationName: "item"
  }
};
