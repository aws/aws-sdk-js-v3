import { List as _List_ } from "@aws-sdk/types";
import { _LoadPermissionRequest } from "./_LoadPermissionRequest";

export const _LoadPermissionListRequest: _List_ = {
  type: "list",
  member: {
    shape: _LoadPermissionRequest,
    locationName: "item"
  }
};
