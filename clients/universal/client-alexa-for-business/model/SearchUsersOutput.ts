import { _UserDataList } from "./_UserDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchUsersOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Users: {
      shape: _UserDataList
    },
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    TotalCount: {
      shape: {
        type: "integer"
      }
    }
  }
};
