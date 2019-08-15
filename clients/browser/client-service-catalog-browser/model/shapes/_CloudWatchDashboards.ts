import { List as _List_ } from "@aws-sdk/types";
import { _CloudWatchDashboard } from "./_CloudWatchDashboard";

export const _CloudWatchDashboards: _List_ = {
  type: "list",
  member: {
    shape: _CloudWatchDashboard
  }
};
