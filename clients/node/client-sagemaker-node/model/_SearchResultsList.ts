import { List as _List_ } from "@aws-sdk/types";
import { _SearchRecord } from "./_SearchRecord";

export const _SearchResultsList: _List_ = {
  type: "list",
  member: {
    shape: _SearchRecord
  }
};
