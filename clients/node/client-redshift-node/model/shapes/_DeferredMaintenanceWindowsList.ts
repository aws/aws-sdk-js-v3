import { List as _List_ } from "@aws-sdk/types";
import { _DeferredMaintenanceWindow } from "./_DeferredMaintenanceWindow";

export const _DeferredMaintenanceWindowsList: _List_ = {
  type: "list",
  member: {
    shape: _DeferredMaintenanceWindow,
    locationName: "DeferredMaintenanceWindow"
  }
};
