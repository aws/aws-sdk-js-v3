import { List as _List_ } from "@aws-sdk/types";
import { _InvalidationSummary } from "./_InvalidationSummary";

export const _InvalidationSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _InvalidationSummary,
    locationName: "InvalidationSummary"
  }
};
