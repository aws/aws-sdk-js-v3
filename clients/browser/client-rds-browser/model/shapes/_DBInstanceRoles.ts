import { List as _List_ } from "@aws-sdk/types";
import { _DBInstanceRole } from "./_DBInstanceRole";

export const _DBInstanceRoles: _List_ = {
  type: "list",
  member: {
    shape: _DBInstanceRole,
    locationName: "DBInstanceRole"
  }
};
