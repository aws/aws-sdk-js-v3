import { List as _List_ } from "@aws-sdk/types";
import { _MemberSummary } from "./_MemberSummary";

export const _MemberSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _MemberSummary
  }
};
