import { List as _List_ } from "@aws-sdk/types";
import { _KeywordFilter } from "./_KeywordFilter";

export const _KeywordFilterList: _List_ = {
  type: "list",
  member: {
    shape: _KeywordFilter
  }
};
