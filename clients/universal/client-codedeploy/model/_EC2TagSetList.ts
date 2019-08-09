import { List as _List_ } from "@aws-sdk/types";
import { _EC2TagFilterList } from "./_EC2TagFilterList";

export const _EC2TagSetList: _List_ = {
  type: "list",
  member: {
    shape: _EC2TagFilterList
  }
};
