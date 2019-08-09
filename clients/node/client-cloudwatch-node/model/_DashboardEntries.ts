import { List as _List_ } from "@aws-sdk/types";
import { _DashboardEntry } from "./_DashboardEntry";

export const _DashboardEntries: _List_ = {
  type: "list",
  member: {
    shape: _DashboardEntry
  }
};
