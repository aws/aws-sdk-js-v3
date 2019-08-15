import { _DocumentFilterList } from "./_DocumentFilterList";
import { _DocumentKeyValuesFilterList } from "./_DocumentKeyValuesFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListDocumentsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    DocumentFilterList: {
      shape: _DocumentFilterList
    },
    Filters: {
      shape: _DocumentKeyValuesFilterList
    },
    MaxResults: {
      shape: {
        type: "integer",
        min: 1
      }
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
