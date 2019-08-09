import { _AssociationList } from "./_AssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    Associations: {
      shape: _AssociationList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
