import { List as _List_ } from "@aws-sdk/types";
import { _LaunchPathSummary } from "./_LaunchPathSummary";

export const _LaunchPathSummaries: _List_ = {
  type: "list",
  member: {
    shape: _LaunchPathSummary
  }
};
