import { List as _List_ } from "@aws-sdk/types";
import { _PendingMaintenanceAction } from "./_PendingMaintenanceAction";

export const _PendingMaintenanceActionList: _List_ = {
  type: "list",
  member: {
    shape: _PendingMaintenanceAction
  }
};
