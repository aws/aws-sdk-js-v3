import { List as _List_ } from "@aws-sdk/types";
import { _PolicySummary } from "./_PolicySummary";

export const _Policies: _List_ = {
  type: "list",
  member: {
    shape: _PolicySummary
  }
};
