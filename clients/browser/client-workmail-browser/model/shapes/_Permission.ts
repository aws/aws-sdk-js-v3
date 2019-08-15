import { _PermissionValues } from "./_PermissionValues";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const _Permission: _Structure_ = {
  type: "structure",
  required: ["GranteeId", "GranteeType", "PermissionValues"],
  members: {
    GranteeId: {
      shape: {
        type: "string",
        min: 12
      }
    },
    GranteeType: {
      shape: {
        type: "string"
      }
    },
    PermissionValues: {
      shape: _PermissionValues
    }
  }
};
