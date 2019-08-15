import { List as _List_ } from "@aws-sdk/types";
import { _AssociationVersionInfo } from "./_AssociationVersionInfo";

export const _AssociationVersionList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AssociationVersionInfo
  }
};
