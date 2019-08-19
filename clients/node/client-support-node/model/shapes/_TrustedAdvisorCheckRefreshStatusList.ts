import { List as _List_ } from "@aws-sdk/types";
import { _TrustedAdvisorCheckRefreshStatus } from "./_TrustedAdvisorCheckRefreshStatus";

export const _TrustedAdvisorCheckRefreshStatusList: _List_ = {
  type: "list",
  member: {
    shape: _TrustedAdvisorCheckRefreshStatus
  }
};
