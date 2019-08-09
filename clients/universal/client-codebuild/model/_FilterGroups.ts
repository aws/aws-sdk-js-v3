import { List as _List_ } from "@aws-sdk/types";
import { _FilterGroup } from "./_FilterGroup";

export const _FilterGroups: _List_ = {
  type: "list",
  member: {
    shape: _FilterGroup
  }
};
