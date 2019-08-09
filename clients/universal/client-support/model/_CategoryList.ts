import { List as _List_ } from "@aws-sdk/types";
import { _Category } from "./_Category";

export const _CategoryList: _List_ = {
  type: "list",
  member: {
    shape: _Category
  }
};
