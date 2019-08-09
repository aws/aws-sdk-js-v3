import { List as _List_ } from "@aws-sdk/types";
import { _AttackProperty } from "./_AttackProperty";

export const _AttackProperties: _List_ = {
  type: "list",
  member: {
    shape: _AttackProperty
  }
};
