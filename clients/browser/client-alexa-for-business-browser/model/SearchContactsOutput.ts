import { _ContactDataList } from "./_ContactDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchContactsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Contacts: {
      shape: _ContactDataList
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
