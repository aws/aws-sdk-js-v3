import { List as _List_ } from "@aws-sdk/types";
import { _WorkGroupSummary } from "./_WorkGroupSummary";

export const _WorkGroupsList: _List_ = {
  type: "list",
  member: {
    shape: _WorkGroupSummary
  }
};
