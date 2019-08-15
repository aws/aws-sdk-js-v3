import { List as _List_ } from "@aws-sdk/types";
import { _GeoMatchSetUpdate } from "./_GeoMatchSetUpdate";

export const _GeoMatchSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _GeoMatchSetUpdate
  }
};
