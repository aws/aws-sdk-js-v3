import { List as _List_ } from "@aws-sdk/types";
import { _AssociationFilter } from "./_AssociationFilter";

export const _AssociationFilterList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AssociationFilter
  }
};
