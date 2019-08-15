import { _Group } from "./_Group";
import { _userListType } from "./_userListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetGroupOutput: _Structure_ = {
  type: "structure",
  required: ["Group", "Users"],
  members: {
    Group: {
      shape: _Group
    },
    Users: {
      shape: _userListType
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
