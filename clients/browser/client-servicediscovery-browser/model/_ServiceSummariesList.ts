import { List as _List_ } from "@aws-sdk/types";
import { _ServiceSummary } from "./_ServiceSummary";

export const _ServiceSummariesList: _List_ = {
  type: "list",
  member: {
    shape: _ServiceSummary
  }
};
