import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowExecution } from "./_MaintenanceWindowExecution";

export const _MaintenanceWindowExecutionList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowExecution
  }
};
