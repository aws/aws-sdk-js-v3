import { List as _List_ } from "@aws-sdk/types";
import { _StreamingDistributionSummary } from "./_StreamingDistributionSummary";

export const _StreamingDistributionSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _StreamingDistributionSummary,
    locationName: "StreamingDistributionSummary"
  }
};
