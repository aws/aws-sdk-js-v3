import { List as _List_ } from "@aws-sdk/types";
import { _AttackVectorDescription } from "./_AttackVectorDescription";

export const _AttackVectorDescriptionList: _List_ = {
  type: "list",
  member: {
    shape: _AttackVectorDescription
  }
};
