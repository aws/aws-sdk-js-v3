import { _PermissionInfoList } from "./_PermissionInfoList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Principal: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Id: {
      shape: {
        type: "string",
        min: 1
      }
    },
    Type: {
      shape: {
        type: "string"
      }
    },
    Roles: {
      shape: _PermissionInfoList
    }
  }
};
