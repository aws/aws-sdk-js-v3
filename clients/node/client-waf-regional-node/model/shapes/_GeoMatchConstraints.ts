import { List as _List_ } from "@aws-sdk/types";
import { _GeoMatchConstraint } from "./_GeoMatchConstraint";

export const _GeoMatchConstraints: _List_ = {
  type: "list",
  member: {
    shape: _GeoMatchConstraint
  }
};
