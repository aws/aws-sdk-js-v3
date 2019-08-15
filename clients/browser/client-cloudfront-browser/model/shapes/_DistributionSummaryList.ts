import { List as _List_ } from "@aws-sdk/types";
import { _DistributionSummary } from "./_DistributionSummary";

export const _DistributionSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _DistributionSummary,
    locationName: "DistributionSummary"
  }
};
