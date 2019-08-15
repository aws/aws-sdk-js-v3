import { List as _List_ } from "@aws-sdk/types";
import { _SizeConstraint } from "./_SizeConstraint";

export const _SizeConstraints: _List_ = {
  type: "list",
  member: {
    shape: _SizeConstraint
  }
};
