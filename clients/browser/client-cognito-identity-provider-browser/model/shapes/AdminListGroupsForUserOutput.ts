import { _GroupListType } from "./_GroupListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const AdminListGroupsForUserOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _GroupListType
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
