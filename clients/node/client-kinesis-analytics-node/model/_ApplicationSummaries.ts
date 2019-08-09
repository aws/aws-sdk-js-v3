import { List as _List_ } from "@aws-sdk/types";
import { _ApplicationSummary } from "./_ApplicationSummary";

export const _ApplicationSummaries: _List_ = {
  type: "list",
  member: {
    shape: _ApplicationSummary
  }
};
