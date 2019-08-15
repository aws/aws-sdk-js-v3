import { List as _List_ } from "@aws-sdk/types";
import { _ResourcePendingMaintenanceActions } from "./_ResourcePendingMaintenanceActions";

export const _PendingMaintenanceActions: _List_ = {
  type: "list",
  member: {
    shape: _ResourcePendingMaintenanceActions
  }
};
