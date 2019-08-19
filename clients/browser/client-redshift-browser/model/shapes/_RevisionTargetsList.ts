import { List as _List_ } from "@aws-sdk/types";
import { _RevisionTarget } from "./_RevisionTarget";

export const _RevisionTargetsList: _List_ = {
  type: "list",
  member: {
    shape: _RevisionTarget,
    locationName: "RevisionTarget"
  }
};
