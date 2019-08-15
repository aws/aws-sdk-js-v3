import { _Members } from "./_Members";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupMembersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Members: {
      shape: _Members
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
