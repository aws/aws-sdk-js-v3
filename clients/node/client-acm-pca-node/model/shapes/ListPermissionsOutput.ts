import { _PermissionList } from "./_PermissionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListPermissionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Permissions: {
      shape: _PermissionList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
