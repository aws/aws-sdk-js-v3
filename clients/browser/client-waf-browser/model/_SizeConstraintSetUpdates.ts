import { List as _List_ } from "@aws-sdk/types";
import { _SizeConstraintSetUpdate } from "./_SizeConstraintSetUpdate";

export const _SizeConstraintSetUpdates: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _SizeConstraintSetUpdate
  }
};
