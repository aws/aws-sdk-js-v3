import { List as _List_ } from "@aws-sdk/types";
import { _PolicyGroup } from "./_PolicyGroup";

export const _PolicyGroupListType: _List_ = {
  type: "list",
  member: {
    shape: _PolicyGroup
  }
};
