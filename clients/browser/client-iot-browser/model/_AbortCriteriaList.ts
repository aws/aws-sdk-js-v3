import { List as _List_ } from "@aws-sdk/types";
import { _AbortCriteria } from "./_AbortCriteria";

export const _AbortCriteriaList: _List_ = {
  type: "list",
  min: 1,
  member: {
    shape: _AbortCriteria
  }
};
