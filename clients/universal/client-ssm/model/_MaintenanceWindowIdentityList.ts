import { List as _List_ } from "@aws-sdk/types";
import { _MaintenanceWindowIdentity } from "./_MaintenanceWindowIdentity";

export const _MaintenanceWindowIdentityList: _List_ = {
  type: "list",
  member: {
    shape: _MaintenanceWindowIdentity
  }
};
