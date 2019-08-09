import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowTask } from "./_MaintenanceWindowTask";

export const _MaintenanceWindowTaskList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowTask
  }
};
