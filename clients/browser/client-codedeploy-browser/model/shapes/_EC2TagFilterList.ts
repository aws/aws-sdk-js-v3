import { List as _List_ } from "@aws-sdk/types";
import { _EC2TagFilter } from "./_EC2TagFilter";

export const _EC2TagFilterList: _List_ = {
  type: "list",
  member: {
    shape: _EC2TagFilter
  }
};
