import { List as _List_ } from "@aws-sdk/types";
import { _WebACLSummary } from "./_WebACLSummary";

export const _WebACLSummaries: _List_ = {
  type: "list",
  member: {
    shape: _WebACLSummary
  }
};
