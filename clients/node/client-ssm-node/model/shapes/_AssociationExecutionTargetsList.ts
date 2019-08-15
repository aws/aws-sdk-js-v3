import { List as _List_ } from "@aws-sdk/types";
import { _AssociationExecutionTarget } from "./_AssociationExecutionTarget";

export const _AssociationExecutionTargetsList: _List_ = {
  type: "list",
  member: {
    shape: _AssociationExecutionTarget
  }
};
