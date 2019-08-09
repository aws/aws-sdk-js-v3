import { _ResourceShareAssociationList } from "./_ResourceShareAssociationList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const GetResourceShareAssociationsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    resourceShareAssociations: {
      shape: _ResourceShareAssociationList
    },
    nextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
