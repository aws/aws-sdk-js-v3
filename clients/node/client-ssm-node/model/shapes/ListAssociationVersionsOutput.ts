import { _AssociationVersionList } from "./_AssociationVersionList";
import { Structure as _Structure_ } from "@aws-sdk/types";

export const ListAssociationVersionsOutput: _Structure_ = {
  type: "structure",
  required: [],
  members: {
    AssociationVersions: {
      shape: _AssociationVersionList
    },
    NextToken: {
      shape: {
        type: "string"
      }
    }
  }
};
