import { List as _List_ } from "@aws-sdk/types";
import { _TrustedAdvisorCheckDescription } from "./_TrustedAdvisorCheckDescription";

export const _TrustedAdvisorCheckList: _List_ = {
  type: "list",
  member: {
    shape: _TrustedAdvisorCheckDescription
  }
};
