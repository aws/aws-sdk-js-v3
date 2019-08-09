import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowExecutionTaskIdentity } from "./_MaintenanceWindowExecutionTaskIdentity";

export const _MaintenanceWindowExecutionTaskIdentityList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowExecutionTaskIdentity
  }
};
