import { List as _List_ } from "@aws-sdk/types";
import { _RevisionLocation } from "./_RevisionLocation";

export const _RevisionLocationList: _List_ = {
  type: "list",
  member: {
    shape: _RevisionLocation
  }
};
