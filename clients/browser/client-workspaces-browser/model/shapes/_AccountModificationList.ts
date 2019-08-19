import { List as _List_ } from "@aws-sdk/types";
import { _AccountModification } from "./_AccountModification";

export const _AccountModificationList: _List_ = {
  type: "list",
  member: {
    shape: _AccountModification
  }
};
