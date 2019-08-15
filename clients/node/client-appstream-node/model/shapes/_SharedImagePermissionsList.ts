import { List as _List_ } from "@aws-sdk/types";
import { _SharedImagePermissions } from "./_SharedImagePermissions";

export const _SharedImagePermissionsList: _List_ = {
  type: "list",
  member: {
    shape: _SharedImagePermissions
  }
};
