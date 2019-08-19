import { List as _List_ } from "@aws-sdk/types";
import { _SortCriterion } from "./_SortCriterion";

export const _SortCriteria: _List_ = {
  type: "list",
  member: {
    shape: _SortCriterion
  }
};
