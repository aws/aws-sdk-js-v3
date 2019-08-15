import { _TrustedAdvisorCheckRefreshStatus } from "./_TrustedAdvisorCheckRefreshStatus";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const RefreshTrustedAdvisorCheckOutput: _Structure_ = {
  type: "structure",
  required: ["status"],
  members: {
    status: {
      shape: _TrustedAdvisorCheckRefreshStatus
    }
  }
};
