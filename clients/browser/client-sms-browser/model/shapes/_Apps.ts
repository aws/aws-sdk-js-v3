import { List as _List_ } from "@aws-sdk/types";
import { _AppSummary } from "./_AppSummary";

export const _Apps: _List_ = {
  type: "list",
  member: {
    shape: _AppSummary
  }
};
