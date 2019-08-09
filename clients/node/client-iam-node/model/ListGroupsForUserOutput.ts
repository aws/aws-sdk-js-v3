import { _groupListType } from "./_groupListType";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsForUserOutput: _Structure_ = {
  type: "structure",
  required: ["Groups"],
  members: {
    Groups: {
      shape: _groupListType
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
