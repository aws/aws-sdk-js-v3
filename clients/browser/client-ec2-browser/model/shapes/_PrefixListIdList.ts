import { List as _List_ } from "@aws-sdk/types";
import { _PrefixListId } from "./_PrefixListId";

export const _PrefixListIdList: _List_ = {
  type: "list",
  member: {
    shape: _PrefixListId,
    locationName: "item"
  }
};
