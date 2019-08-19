import { List as _List_ } from "@aws-sdk/types";
import { _DBClusterRole } from "./_DBClusterRole";

export const _DBClusterRoles: _List_ = {
  type: "list",
  member: {
    shape: _DBClusterRole,
    locationName: "DBClusterRole"
  }
};
