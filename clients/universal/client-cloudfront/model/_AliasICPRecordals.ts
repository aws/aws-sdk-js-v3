import { List as _List_ } from "@aws-sdk/types";
import { _AliasICPRecordal } from "./_AliasICPRecordal";

export const _AliasICPRecordals: _List_ = {
  type: "list",
  member: {
    shape: _AliasICPRecordal,
    locationName: "AliasICPRecordal"
  }
};
