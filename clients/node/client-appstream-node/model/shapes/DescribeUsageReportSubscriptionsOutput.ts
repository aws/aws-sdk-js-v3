import { _UsageReportSubscriptionList } from "./_UsageReportSubscriptionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const DescribeUsageReportSubscriptionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    UsageReportSubscriptions: {
      shape: _UsageReportSubscriptionList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
