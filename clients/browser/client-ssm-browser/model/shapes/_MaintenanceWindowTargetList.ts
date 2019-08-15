import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowTarget } from "./_MaintenanceWindowTarget";

export const _MaintenanceWindowTargetList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowTarget
  }
};
