import { List as _List_ } from "@aws-sdk/types";
import { _TargetGroupAttribute } from "./_TargetGroupAttribute";

export const _TargetGroupAttributes: _List_ = {
  type: "list",
  member: {
    shape: _TargetGroupAttribute
  }
};
