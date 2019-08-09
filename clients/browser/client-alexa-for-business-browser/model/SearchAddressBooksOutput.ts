import { _AddressBookDataList } from "./_AddressBookDataList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchAddressBooksOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AddressBooks: {
      shape: _AddressBookDataList
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
