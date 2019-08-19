import { List as _List_ } from "@aws-sdk/types";
import { _AssociationExecutionFilter } from "./_AssociationExecutionFilter";

export const _AssociationExecutionFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AssociationExecutionFilter
  }
};
