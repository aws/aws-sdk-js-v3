import { _Groups } from "./_Groups";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Groups: {
      shape: _Groups
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    }
  }
};
