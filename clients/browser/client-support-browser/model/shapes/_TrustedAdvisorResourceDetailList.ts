import { List as _List_ } from "@aws-sdk/types";
import { _TrustedAdvisorResourceDetail } from "./_TrustedAdvisorResourceDetail";

export const _TrustedAdvisorResourceDetailList: _List_ = {
  type: "list",
  member: {
    shape: _TrustedAdvisorResourceDetail
  }
};
