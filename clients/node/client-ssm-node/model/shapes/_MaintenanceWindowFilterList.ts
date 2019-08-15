import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowFilter } from "./_MaintenanceWindowFilter";

export const _MaintenanceWindowFilterList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowFilter
  }
};
