import { List as _List_ } from "@aws-sdk/types";
import { _PublicKeySummary } from "./_PublicKeySummary";

export const _PublicKeySummaryList: _List_ = {
  type: "list",
  member: {
    shape: _PublicKeySummary,
    locationName: "PublicKeySummary"
  }
};
