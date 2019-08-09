import { List as _List_ } from "@aws-sdk/types";
import { _UsageReportSubscription } from "./_UsageReportSubscription";

export const _UsageReportSubscriptionList: _List_ = {
  type: "list",
  member: {
    shape: _UsageReportSubscription
  }
};
