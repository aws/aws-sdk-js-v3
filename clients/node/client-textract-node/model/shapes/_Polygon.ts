import { List as _List_ } from "@aws-sdk/types";
import { _Point } from "./_Point";

export const _Polygon: _List_ = {
  type: "list",
  member: {
    shape: _Point
  }
};
