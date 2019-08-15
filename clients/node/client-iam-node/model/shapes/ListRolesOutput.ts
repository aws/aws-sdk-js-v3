import { _roleListType } from "./_roleListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListRolesOutput: _Structure_ = {
  type: "structure",
  required: ["Roles"],
  members: {
    Roles: {
      shape: _roleListType
    },
    IsTruncated: {
      shape: {
        type: "boolean"
      }
    },
    Marker: {
      shape: {
        type: "string"
      }
    }
  }
};
