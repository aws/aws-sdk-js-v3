import { _LoadPermissionListRequest } from "./_LoadPermissionListRequest";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _LoadPermissionModifications: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Add: {
      shape: _LoadPermissionListRequest
    },
    Remove: {
      shape: _LoadPermissionListRequest
    }
  }
};
