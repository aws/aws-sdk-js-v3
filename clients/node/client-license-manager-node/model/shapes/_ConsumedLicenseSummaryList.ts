import { List as _List_ } from "@aws-sdk/types";
import { _ConsumedLicenseSummary } from "./_ConsumedLicenseSummary";

export const _ConsumedLicenseSummaryList: _List_ = {
  type: "list",
  member: {
    shape: _ConsumedLicenseSummary
  }
};
