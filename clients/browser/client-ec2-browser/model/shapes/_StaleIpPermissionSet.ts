import { List as _List_ } from "@aws-sdk/types";
import { _StaleIpPermission } from "./_StaleIpPermission";

export const _StaleIpPermissionSet: _List_ = {
  type: "list",
  member: {
    shape: _StaleIpPermission,
    locationName: "item"
  }
};
