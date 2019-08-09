import { _FilterList } from "./_FilterList";
import { _SortList } from "./_SortList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const SearchRoomsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    NextToken: {
      shape: {
        type: "string",
        min: 1
      }
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    Filters: {
      shape: _FilterList
    },
    SortCriteria: {
      shape: _SortList
    }
  }
};
