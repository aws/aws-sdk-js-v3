import { _GroupIdentifierList } from "./_GroupIdentifierList";
import { _GroupList } from "./_GroupList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListGroupsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    GroupIdentifiers: {
      shape: _GroupIdentifierList
    },
    Groups: {
      shape: _GroupList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
