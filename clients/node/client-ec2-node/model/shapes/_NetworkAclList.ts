import { List as _List_ } from "@aws-sdk/types";
import { _NetworkAcl } from "./_NetworkAcl";

export const _NetworkAclList: _List_ = {
  type: "list",
  member: {
    shape: _NetworkAcl,
    locationName: "item"
  }
};
