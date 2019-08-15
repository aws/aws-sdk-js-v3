import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowIdentityForTarget } from "./_MaintenanceWindowIdentityForTarget";

export const _MaintenanceWindowsForTargetList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowIdentityForTarget
  }
};
