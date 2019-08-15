import { _AssociationFilterList } from "./_AssociationFilterList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociationsInput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationFilterList: {
      shape: _AssociationFilterList
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
