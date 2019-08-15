import { _TrustedAdvisorCheckRefreshStatusList } from "./_TrustedAdvisorCheckRefreshStatusList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeTrustedAdvisorCheckRefreshStatusesOutput: _Structure_ = {
  type: "structure",
  required: ["statuses"],
  members: {
    statuses: {
      shape: _TrustedAdvisorCheckRefreshStatusList
    }
  }
};
