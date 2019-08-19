import { List as _List_ } from "@aws-sdk/types";
import { _EventCategoryGroup } from "./_EventCategoryGroup";

export const _EventCategoryGroupList: _List_ = {
  type: "list",
  member: {
    shape: _EventCategoryGroup
  }
};
