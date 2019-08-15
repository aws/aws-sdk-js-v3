import { List as _List_ } from "@aws-sdk/types";
import { _SubnetGroup } from "./_SubnetGroup";

export const _SubnetGroupList: _List_ = {
  type: "list",
  member: {
    shape: _SubnetGroup
  }
};
