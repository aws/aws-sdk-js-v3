import { List as _List_ } from "@aws-sdk/types";
import { _AssociationExecutionTargetsFilter } from "./_AssociationExecutionTargetsFilter";

export const _AssociationExecutionTargetsFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AssociationExecutionTargetsFilter
  }
};
